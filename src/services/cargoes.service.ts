import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CargoesEntity } from 'src/model/cargoes.entity';
import { Repository } from 'typeorm';
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

  async findAll() {
    return await this.cargoesEntityRepository
      .find()
      .then((items) => items.map((e) => CargoesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.cargoesEntityRepository
      .findOne(id)
      .then((item) => (item ? CargoesDto.fromEntity(item) : null));
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
