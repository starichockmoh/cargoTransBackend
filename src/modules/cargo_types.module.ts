import { Module } from '@nestjs/common';
import { CargoTypesController } from 'src/controllers';
import { CargoTypesService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoTypesEntity } from 'src/model/cargo_types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargoTypesEntity])],
  controllers: [CargoTypesController],
  providers: [CargoTypesService],
})
export class CargoTypesModule {}
