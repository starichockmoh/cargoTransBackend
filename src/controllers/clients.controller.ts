import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ClientsDto } from 'src/dto';
import { ClientsService } from 'src/services';

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
  async getAll(@Query('search') search: string | undefined) {
    return await this.clientsService.findAll(search);
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
