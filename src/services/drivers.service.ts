import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriversDto } from 'src/dto';
import { DriversEntity } from 'src/model/drivers.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriversEntity)
    private readonly driversEntityRepository: Repository<DriversEntity>,
  ) {}
  async create(dto: DriversDto) {
    const e = await this.driversEntityRepository.save(dto.toEntity());
    return DriversDto.fromEntity(e);
  }

  async findAll(search: string | undefined) {
    if (search) {
      return await this.driversEntityRepository
        .find({
          where: [{ last_name: search }],
        })
        .then((items) => items.map((e) => DriversDto.fromEntity(e)));
    }
    return await this.driversEntityRepository
      .find()
      .then((items) => items.map((e) => DriversDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.driversEntityRepository
      .findOne(id)
      .then((item) => (item ? DriversDto.fromEntity(item) : null));
  }

  async update(id: number, dto: DriversDto) {
    await this.driversEntityRepository.update(id, dto.toEntity());
    return await this.driversEntityRepository
      .findOne(id)
      .then((item) => (item ? DriversDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.driversEntityRepository.delete(id);
  }
}
