import { Module } from '@nestjs/common';
import { DriversController } from 'src/controllers';
import { DriversService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversEntity } from 'src/model/drivers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriversEntity])],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
