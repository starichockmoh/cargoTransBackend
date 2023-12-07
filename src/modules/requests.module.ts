import { Module } from '@nestjs/common';
import { RequestsController } from 'src/controllers';
import { RequestsService } from 'src/services';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
