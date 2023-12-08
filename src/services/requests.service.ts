import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestsEntity } from 'src/model/requests.entity';
import { Repository } from 'typeorm';
import { RequestsDto } from 'src/dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestsEntity)
    private readonly requestsEntityRepository: Repository<RequestsEntity>,
  ) {}
  async create(dto: RequestsDto) {
    const e = await this.requestsEntityRepository.save(dto.toEntity());
    return RequestsDto.fromEntity(e);
  }

  async findAll() {
    return await this.requestsEntityRepository
      .find()
      .then((items) => items.map((e) => RequestsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.requestsEntityRepository
      .findOne(id)
      .then((item) => (item ? RequestsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: RequestsDto) {
    await this.requestsEntityRepository.update(id, dto.toEntity());
    return await this.requestsEntityRepository
      .findOne(id)
      .then((item) => (item ? RequestsDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.requestsEntityRepository.delete(id);
  }
}
