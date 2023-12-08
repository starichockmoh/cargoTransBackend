import { Module } from '@nestjs/common';
import { CargoesController } from 'src/controllers';
import { CargoesService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoesEntity } from 'src/model/cargoes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargoesEntity])],
  controllers: [CargoesController],
  providers: [CargoesService],
})
export class CargoesModule {}
