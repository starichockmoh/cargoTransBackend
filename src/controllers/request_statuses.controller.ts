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
import { RequestStatusesDto } from 'src/dto';
import { RequestStatusesService } from 'src/services';
import { Request } from 'express';

@Controller('request_statuses')
export class RequestStatusesController {
  constructor(private requestStatusesService: RequestStatusesService) {}
  @Post()
  async post(
    @Body(new ValidationPipe({ transform: true })) dto: RequestStatusesDto,
  ) {
    return this.requestStatusesService.create(dto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAll(@Req() request: Request) {
    return await this.requestStatusesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.requestStatusesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: RequestStatusesDto,
  ) {
    return this.requestStatusesService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.requestStatusesService.remove(Number(id));
  }
}
