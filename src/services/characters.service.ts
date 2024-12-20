import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharactersEntity } from 'src/model/characters.entity';
import { CharactersDto } from 'src/dto/characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(CharactersEntity)
    private readonly charactersEntityRepository: Repository<CharactersEntity>,
  ) {}
  async create(dto: CharactersDto) {
    const e = await this.charactersEntityRepository.save(dto.toEntity());
    return CharactersDto.fromEntity(e);
  }

  async findAll(search: string | undefined) {
    if (search) {
      return await this.charactersEntityRepository
        .find({
          where: [{ last_name: search }],
        })
        .then((items) => items.map((e) => CharactersDto.fromEntity(e)));
    }
    return await this.charactersEntityRepository
      .find()
      .then((items) => items.map((e) => CharactersDto.fromEntity(e)));
  }

  async findOne(id: number) {
    return await this.charactersEntityRepository
      .findOne(id)
      .then((item) => (item ? CharactersDto.fromEntity(item) : null));
  }

  async update(id: number, dto: CharactersDto) {
    await this.charactersEntityRepository.update(id, dto.toEntity());
    return await this.charactersEntityRepository
      .findOne(id)
      .then((item) => (item ? CharactersDto.fromEntity(item) : null));
  }

  async remove(id: number) {
    return await this.charactersEntityRepository.delete(id);
  }
}
