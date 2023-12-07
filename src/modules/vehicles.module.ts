import { Module } from '@nestjs/common';
import { VehiclesController } from 'src/controllers';
import { VehiclesService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesEntity } from 'src/model/vehicles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehiclesEntity])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
