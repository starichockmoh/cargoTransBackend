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
import { VehicleGroupsDto } from 'src/dto';
import { VehicleGroupsService } from 'src/services';

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
  async getAll(@Query('search') search: string | undefined) {
    return await this.vehicleGroupsService.findAll(search);
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
