import { Module } from '@nestjs/common';
import { VehicleGroupsController } from 'src/controllers';
import { VehicleGroupsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleGroupsEntity } from 'src/model/vehicle_groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleGroupsEntity])],
  controllers: [VehicleGroupsController],
  providers: [VehicleGroupsService],
})
export class VehicleGroupsModule {}
