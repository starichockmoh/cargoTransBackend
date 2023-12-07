import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleGroupsEntity } from 'src/model/vehicle_groups.entity';
import { Repository } from 'typeorm';
import { VehicleGroupsDto } from 'src/dto';

@Injectable()
export class VehicleGroupsService {
  constructor(
    @InjectRepository(VehicleGroupsEntity)
    private readonly vehicleGroupsEntityRepository: Repository<VehicleGroupsEntity>,
  ) {}
  async create(dto: VehicleGroupsDto) {
    const e = await this.vehicleGroupsEntityRepository.save(dto.toEntity());
    return VehicleGroupsDto.fromEntity(e);
  }

  async findAll() {
    return await this.vehicleGroupsEntityRepository
      .find()
      .then((items) => items.map((e) => VehicleGroupsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.vehicleGroupsEntityRepository
      .findOne(id)
      .then((item) => (item ? VehicleGroupsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: VehicleGroupsDto) {
    await this.vehicleGroupsEntityRepository.update(id, dto.toEntity());
    return await this.vehicleGroupsEntityRepository
      .findOne(id)
      .then((item) => (item ? VehicleGroupsDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.vehicleGroupsEntityRepository.delete(id);
  }
}
