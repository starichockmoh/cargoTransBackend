import { Module } from '@nestjs/common';
import { RequestStatusesController } from 'src/controllers';
import { RequestStatusesService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestStatusesEntity } from 'src/model/request_statuses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestStatusesEntity])],
  controllers: [RequestStatusesController],
  providers: [RequestStatusesService],
})
export class RequestStatusesModule {}
