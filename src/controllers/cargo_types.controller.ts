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
import type { PostCargoTypeDto } from 'src/dto';
import { CargoTypesService } from 'src/services';

@Controller('cargo_types')
export class CargoTypesController {
  constructor(private cargoTypesService: CargoTypesService) {}
  @Post()
  async create(@Body() postDto: PostCargoTypeDto) {
    return this.cargoTypesService.create(postDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query() query: { limit: string }) {
    return this.cargoTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cargoTypesService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: PostCargoTypeDto) {
    return this.cargoTypesService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cargoTypesService.remove(Number(id));
  }
}
