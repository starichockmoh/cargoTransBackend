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
import type { PostPickupPointDto } from 'src/dto';
import { PickupPointsService } from 'src/services';

@Controller('pickup_points')
export class PickupPointsController {
  constructor(private pickupPointsService: PickupPointsService) {}
  @Post()
  async create(@Body() postDto: PostPickupPointDto) {
    return this.pickupPointsService.create(postDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query() query: { limit: string }) {
    return this.pickupPointsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pickupPointsService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: PostPickupPointDto) {
    return this.pickupPointsService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pickupPointsService.remove(Number(id));
  }
}
