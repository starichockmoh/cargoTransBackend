import { Module } from '@nestjs/common';
import { CargoesController } from 'src/controllers';
import { CargoesService } from 'src/services';

@Module({
  controllers: [CargoesController],
  providers: [CargoesService],
})
export class CargoesModule {}
