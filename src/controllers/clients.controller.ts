import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { ClientsDto } from 'src/dto';
import { ClientsService } from 'src/services';
import { Request } from 'express';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post()
  async postClient(
    @Body(new ValidationPipe({ transform: true })) dto: ClientsDto,
  ) {
    return this.clientsService.create(dto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAll(@Req() request: Request) {
    return await this.clientsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.clientsService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: ClientsDto,
  ) {
    return this.clientsService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.clientsService.remove(Number(id));
  }
}
