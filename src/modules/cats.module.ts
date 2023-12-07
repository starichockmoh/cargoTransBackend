import { Module } from '@nestjs/common';
import { CatsController } from 'src/controllers';
import { CatsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from 'src/model/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
