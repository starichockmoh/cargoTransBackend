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
import { PickUpPointsDto } from 'src/dto';
import { PickUpPointsService } from 'src/services';

@Controller('pick_up_points')
export class PickUpPointsController {
  constructor(private pickupPointsService: PickUpPointsService) {}
  @Post()
  async post(
    @Body(new ValidationPipe({ transform: true })) dto: PickUpPointsDto,
  ) {
    return this.pickupPointsService.create(dto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.pickupPointsService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.pickupPointsService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: PickUpPointsDto,
  ) {
    return this.pickupPointsService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.pickupPointsService.remove(Number(id));
  }
}
