import { Module } from '@nestjs/common';
import { CargoTypesController } from 'src/controllers';
import { CargoTypesService } from 'src/services';

@Module({
  controllers: [CargoTypesController],
  providers: [CargoTypesService],
})
export class CargoTypesModule {}
