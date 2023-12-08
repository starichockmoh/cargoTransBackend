import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers';
import { ClientsService } from 'src/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsEntity } from 'src/model/clients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientsEntity])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
