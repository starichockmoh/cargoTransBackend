import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiclesEntity } from 'src/model/vehicles.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { VehicleGroupsDto, VehiclesDto } from 'src/dto';

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

  async findAll(search: string | undefined) {
    if (search) {
      return await this.vehiclesEntityRepository
        .find({
          where: [{ car_number: search }],
        })
        .then((items) => items.map((e) => VehiclesDto.fromEntity(e)));
    }
    return await this.vehiclesEntityRepository
      .find()
      .then((items) => items.map((e) => VehiclesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    const vehicle = await createQueryBuilder(VehiclesEntity, 'vehicle')
      .innerJoinAndSelect('vehicle.group', 'vehicle_groups')
      .where('vehicle.id = :id', { id: id })
      .getOne();
    return vehicle ? VehiclesDto.fromEntity(vehicle) : null;
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
