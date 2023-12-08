import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PickUpPointsEntity } from 'src/model/pick_up_points.entity';
import { Repository } from 'typeorm';
import { PickUpPointsDto } from 'src/dto';

@Injectable()
export class PickUpPointsService {
  constructor(
    @InjectRepository(PickUpPointsEntity)
    private readonly pickUpPointsEntityRepository: Repository<PickUpPointsEntity>,
  ) {}
  async create(dto: PickUpPointsDto) {
    const e = await this.pickUpPointsEntityRepository.save(dto.toEntity());
    return PickUpPointsDto.fromEntity(e);
  }

  async findAll() {
    return await this.pickUpPointsEntityRepository
      .find()
      .then((items) => items.map((e) => PickUpPointsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.pickUpPointsEntityRepository
      .findOne(id)
      .then((item) => (item ? PickUpPointsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: PickUpPointsDto) {
    await this.pickUpPointsEntityRepository.update(id, dto.toEntity());
    return await this.pickUpPointsEntityRepository
      .findOne(id)
      .then((item) => (item ? PickUpPointsDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.pickUpPointsEntityRepository.delete(id);
  }
}
