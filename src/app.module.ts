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
  PickUpPointsModule,
  RequestStatusesModule,
} from 'src/modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { CharactersModule } from 'src/modules/characters.module';

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
    PickUpPointsModule,
    RequestStatusesModule,
    CharactersModule,
  ],
})
export class AppModule {}
