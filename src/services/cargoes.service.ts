import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CargoesEntity } from 'src/model/cargoes.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { CargoesDto } from 'src/dto';

@Injectable()
export class CargoesService {
  constructor(
    @InjectRepository(CargoesEntity)
    private readonly cargoesEntityRepository: Repository<CargoesEntity>,
  ) {}
  async create(dto: CargoesDto) {
    const e = await this.cargoesEntityRepository.save(dto.toEntity());
    return CargoesDto.fromEntity(e);
  }

  async findAll(search: string | undefined) {
    if (search) {
      return await this.cargoesEntityRepository
        .find({
          where: [{ name: search }],
        })
        .then((items) => items.map((e) => CargoesDto.fromEntity(e)));
    }
    return await this.cargoesEntityRepository
      .find()
      .then((items) => items.map((e) => CargoesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    const cargo = await createQueryBuilder(CargoesEntity, 'cargo')
      .innerJoinAndSelect('cargo.client', 'clients')
      .innerJoinAndSelect('cargo.request', 'requests')
      .innerJoinAndSelect('cargo.cargo_type', 'cargo_types')
      .where('cargo.id = :id', { id: id })
      .getOne();
    return cargo ? CargoesDto.fromEntity(cargo) : null;
  }

  async update(id: number, dto: CargoesDto) {
    await this.cargoesEntityRepository.update(id, dto.toEntity());
    return await this.cargoesEntityRepository
      .findOne(id)
      .then((item) => (item ? CargoesDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.cargoesEntityRepository.delete(id);
  }
}
