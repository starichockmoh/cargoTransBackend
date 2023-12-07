import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiclesEntity } from 'src/model/vehicles.entity';
import { Repository } from 'typeorm';
import { VehiclesDto } from 'src/dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(VehiclesEntity)
    private readonly vehiclesEntityRepository: Repository<VehiclesEntity>,
  ) {}
  async create(dto: VehiclesDto) {
    const e = await this.vehiclesEntityRepository.save(dto.toEntity());
    return VehiclesDto.fromEntity(e);
  }

  async findAll() {
    return await this.vehiclesEntityRepository
      .find()
      .then((items) => items.map((e) => VehiclesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.vehiclesEntityRepository
      .findOne(id)
      .then((item) => (item ? VehiclesDto.fromEntity(item) : null));
  }

  async update(id: number, dto: VehiclesDto) {
    await this.vehiclesEntityRepository.update(id, dto.toEntity());
    return await this.vehiclesEntityRepository
      .findOne(id)
      .then((item) => (item ? VehiclesDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.vehiclesEntityRepository.delete(id);
  }
}
