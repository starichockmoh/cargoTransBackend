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
import { VehiclesDto } from 'src/dto';
import { VehiclesService } from 'src/services';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}
  @Post()
  async post(@Body(new ValidationPipe({ transform: true })) dto: VehiclesDto) {
    return this.vehiclesService.create(dto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.vehiclesService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.vehiclesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: VehiclesDto,
  ) {
    return this.vehiclesService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.vehiclesService.remove(Number(id));
  }
}
