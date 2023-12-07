import { Module } from '@nestjs/common';
import { PickupPointsController } from 'src/controllers';
import { PickupPointsService } from 'src/services';

@Module({
  controllers: [PickupPointsController],
  providers: [PickupPointsService],
})
export class PickupPointsModule {}
