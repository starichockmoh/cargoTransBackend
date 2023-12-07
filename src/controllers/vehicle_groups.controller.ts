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
import { VehicleGroupsDto } from 'src/dto';
import { VehicleGroupsService } from 'src/services';
import { Request } from 'express';

@Controller('vehicle_groups')
export class VehicleGroupsController {
  constructor(private vehicleGroupsService: VehicleGroupsService) {}
  @Post()
  async post(
    @Body(new ValidationPipe({ transform: true })) dto: VehicleGroupsDto,
  ) {
    return this.vehicleGroupsService.create(dto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAll(@Req() request: Request) {
    return await this.vehicleGroupsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.vehicleGroupsService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: VehicleGroupsDto,
  ) {
    return this.vehicleGroupsService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.vehicleGroupsService.remove(Number(id));
  }
}
