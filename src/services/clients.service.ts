import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsDto } from 'src/dto';
import { ClientsEntity } from 'src/model/clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientsEntity)
    private readonly clientsEntityRepository: Repository<ClientsEntity>,
  ) {}
  async create(dto: ClientsDto) {
    const e = await this.clientsEntityRepository.save(dto.toEntity());
    return ClientsDto.fromEntity(e);
  }

  async findAll() {
    return await this.clientsEntityRepository
      .find()
      .then((items) => items.map((e) => ClientsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.clientsEntityRepository
      .findOne(id)
      .then((item) => (item ? ClientsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: ClientsDto) {
    await this.clientsEntityRepository.update(id, dto.toEntity());
    return await this.clientsEntityRepository
      .findOne(id)
      .then((item) => (item ? ClientsDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.clientsEntityRepository.delete(id);
  }
}
