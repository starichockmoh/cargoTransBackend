import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatsDto } from 'src/dto';
import { CatEntity } from 'src/model/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catEntityRepository: Repository<CatEntity>,
  ) {}
  async create(dto: CatsDto) {
    const e = await this.catEntityRepository.save(dto.toEntity());
    return CatsDto.fromEntity(e);
  }

  async findAll() {
    return await this.catEntityRepository
      .find()
      .then((items) => items.map((e) => CatsDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.catEntityRepository
      .findOne(id)
      .then((item) => (item ? CatsDto.fromEntity(item) : null));
  }

  async update(id: number, dto: CatsDto) {
    await this.catEntityRepository.update(id, dto.toEntity());
    return await this.catEntityRepository
      .findOne(id)
      .then((item) => (item ? CatsDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.catEntityRepository.delete(id);
  }
}
