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
import { CargoesDto } from 'src/dto';
import { CargoesService } from 'src/services';

@Controller('cargoes')
export class CargoesController {
  constructor(private cargoesService: CargoesService) {}
  @Post()
  async post(@Body(new ValidationPipe({ transform: true })) dto: CargoesDto) {
    return this.cargoesService.create(dto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.cargoesService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.cargoesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: CargoesDto,
  ) {
    return this.cargoesService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.cargoesService.remove(Number(id));
  }
}
