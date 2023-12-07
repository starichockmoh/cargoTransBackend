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
import type { PostCargoDto } from 'src/dto';
import { CargoesService } from 'src/services';

@Controller('cargoes')
export class CargoesController {
  constructor(private cargoesService: CargoesService) {}
  @Post()
  async create(@Body() postDto: PostCargoDto) {
    return this.cargoesService.create(postDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query() query: { limit: string }) {
    return this.cargoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cargoesService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: PostCargoDto) {
    return this.cargoesService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cargoesService.remove(Number(id));
  }
}
