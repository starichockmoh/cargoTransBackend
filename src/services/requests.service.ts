import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestsEntity } from 'src/model/requests.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { RequestsDto } from 'src/dto';
import { CargoesEntity } from 'src/model/cargoes.entity';

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

  async findAll(client_id: number | undefined, search: string | undefined) {
    if (client_id) {
      const cargoes = await createQueryBuilder(CargoesEntity, 'cargo')
        .innerJoinAndSelect('cargo.request', 'request')
        .where('cargo.client_id = :id', { id: client_id })
        .getMany();
      return cargoes.map((e) => RequestsDto.fromEntity(e.request));
    }
    if (search) {
      return await this.requestsEntityRepository
        .find({
          where: [{ name: search }],
        })
        .then((items) => items.map((e) => RequestsDto.fromEntity(e)));
    }
    return await this.requestsEntityRepository
      .find()
      .then((items) => items.map((e) => RequestsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    const request = await createQueryBuilder(RequestsEntity, 'request')
      .innerJoinAndSelect('request.driver', 'drivers')
      .innerJoinAndSelect('request.vehicle', 'vehicles')
      .innerJoinAndSelect('request.request_status', 'request_statuses')
      .where('request.id = :id', { id: id })
      .getOne();
    return request ? RequestsDto.fromEntity(request) : null;
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

  async getCost(date: string) {
    const res = await this.requestsEntityRepository.query(
      `SELECT cost_calculate('${date}')`,
    );
    if (res.length) {
      return Number(res[0].cost_calculate);
    }
    return 0;
  }
}
