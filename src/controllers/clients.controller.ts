import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import type { PostClientDto } from 'src/dto';
import { ClientsService } from 'src/services';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post()
  async create(@Body() postDto: PostClientDto) {
    return this.clientsService.create(postDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query() query: { limit: string }) {
    return this.clientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientsService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: PostClientDto) {
    return this.clientsService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.clientsService.remove(Number(id));
  }
}
