import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { RequestsDto } from 'src/dto';
import { RequestsService } from 'src/services';

@Controller('requests')
export class RequestsController {
  constructor(private requestsService: RequestsService) {}
  @Post()
  async post(@Body(new ValidationPipe({ transform: true })) dto: RequestsDto) {
    return this.requestsService.create(dto);
  }

  @Get()
  async getAll() {
    return await this.requestsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.requestsService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: RequestsDto,
  ) {
    return this.requestsService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.requestsService.remove(Number(id));
  }
}
