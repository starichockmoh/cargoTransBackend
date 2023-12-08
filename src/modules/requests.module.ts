import { Module } from '@nestjs/common';
import { RequestsController } from 'src/controllers';
import { RequestsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestsEntity } from 'src/model/requests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestsEntity])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
