import { Module } from '@nestjs/common';
import { PickUpPointsController } from 'src/controllers';
import { PickUpPointsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickUpPointsEntity } from 'src/model/pick_up_points.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickUpPointsEntity])],
  controllers: [PickUpPointsController],
  providers: [PickUpPointsService],
})
export class PickUpPointsModule {}
