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
import { VehiclesDto } from 'src/dto';
import { VehiclesService } from 'src/services';
import { Request } from 'express';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}
  @Post()
  async post(@Body(new ValidationPipe({ transform: true })) dto: VehiclesDto) {
    return this.vehiclesService.create(dto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAll(@Req() request: Request) {
    return await this.vehiclesService.findAll();
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
