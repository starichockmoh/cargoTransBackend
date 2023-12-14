import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CargoTypesEntity } from 'src/model/cargo_types.entity';
import { Repository } from 'typeorm';
import { CargoTypesDto } from 'src/dto';

@Injectable()
export class CargoTypesService {
  constructor(
    @InjectRepository(CargoTypesEntity)
    private readonly cargoTypesEntityRepository: Repository<CargoTypesEntity>,
  ) {}
  async create(dto: CargoTypesDto) {
    const e = await this.cargoTypesEntityRepository.save(dto.toEntity());
    return CargoTypesDto.fromEntity(e);
  }

  async findAll(search: string | undefined) {
    if (search) {
      return await this.cargoTypesEntityRepository
        .find({
          where: [{ name: search }],
        })
        .then((items) => items.map((e) => CargoTypesDto.fromEntity(e)));
    }
    return await this.cargoTypesEntityRepository
      .find()
      .then((items) => items.map((e) => CargoTypesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.cargoTypesEntityRepository
      .findOne(id)
      .then((item) => (item ? CargoTypesDto.fromEntity(item) : null));
  }

  async update(id: number, dto: CargoTypesDto) {
    await this.cargoTypesEntityRepository.update(id, dto.toEntity());
    return await this.cargoTypesEntityRepository
      .findOne(id)
      .then((item) => (item ? CargoTypesDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.cargoTypesEntityRepository.delete(id);
  }
}
