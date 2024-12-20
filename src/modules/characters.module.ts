import { Module } from '@nestjs/common';
import { CharactersController } from 'src/controllers/characters.controller';
import { CharactersService } from 'src/services/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersEntity } from 'src/model/characters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharactersEntity])],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
