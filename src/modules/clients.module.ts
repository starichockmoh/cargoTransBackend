import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers';
import { ClientsService } from 'src/services';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
