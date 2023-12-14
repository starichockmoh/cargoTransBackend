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
import { DriversDto } from 'src/dto';
import { DriversService } from 'src/services';

@Controller('drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}
  @Post()
  async postDriver(
    @Body(new ValidationPipe({ transform: true })) driversDto: DriversDto,
  ) {
    return this.driversService.create(driversDto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.driversService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.driversService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: DriversDto,
  ) {
    return this.driversService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.driversService.remove(Number(id));
  }
}
