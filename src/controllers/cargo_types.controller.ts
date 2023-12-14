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
import { CargoTypesDto } from 'src/dto';
import { CargoTypesService } from 'src/services';

@Controller('cargo_types')
export class CargoTypesController {
  constructor(private cargoTypesService: CargoTypesService) {}
  @Post()
  async post(
    @Body(new ValidationPipe({ transform: true })) dto: CargoTypesDto,
  ) {
    return this.cargoTypesService.create(dto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.cargoTypesService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.cargoTypesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: CargoTypesDto,
  ) {
    return this.cargoTypesService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.cargoTypesService.remove(Number(id));
  }
}
