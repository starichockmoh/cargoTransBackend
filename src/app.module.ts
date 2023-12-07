import { Module } from '@nestjs/common';
import {
  CatsModule,
  VehiclesModule,
  VehicleGroupsModule,
  CargoesModule,
  ClientsModule,
  CargoTypesModule,
  RequestsModule,
  DriversModule,
  PickupPointsModule,
} from 'src/modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CatsModule,
    VehiclesModule,
    VehicleGroupsModule,
    CargoesModule,
    ClientsModule,
    CargoTypesModule,
    RequestsModule,
    DriversModule,
    PickupPointsModule,
  ],
})
export class AppModule {}
