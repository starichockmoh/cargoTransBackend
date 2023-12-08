import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestStatusesEntity } from 'src/model/request_statuses.entity';
import { Repository } from 'typeorm';
import { RequestStatusesDto } from 'src/dto';

@Injectable()
export class RequestStatusesService {
  constructor(
    @InjectRepository(RequestStatusesEntity)
    private readonly requestStatusesEntityRepository: Repository<RequestStatusesEntity>,
  ) {}
  async create(dto: RequestStatusesDto) {
    const e = await this.requestStatusesEntityRepository.save(dto.toEntity());
    return RequestStatusesDto.fromEntity(e);
  }

  async findAll() {
    return await this.requestStatusesEntityRepository
      .find()
      .then((items) => items.map((e) => RequestStatusesDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.requestStatusesEntityRepository
      .findOne(id)
      .then((item) => (item ? RequestStatusesDto.fromEntity(item) : null));
  }

  async update(id: number, dto: RequestStatusesDto) {
    await this.requestStatusesEntityRepository.update(id, dto.toEntity());
    return await this.requestStatusesEntityRepository
      .findOne(id)
      .then((item) => (item ? RequestStatusesDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.requestStatusesEntityRepository.delete(id);
  }
}
