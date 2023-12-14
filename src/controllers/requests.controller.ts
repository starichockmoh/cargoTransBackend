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
import { RequestsDto } from 'src/dto';
import { RequestsService } from 'src/services';

@Controller('requests')
export class RequestsController {
  constructor(private requestsService: RequestsService) {}

  @Get('cost')
  async getCost(@Query('date') date: string) {
    return await this.requestsService.getCost(date);
  }
  @Post()
  async post(@Body(new ValidationPipe({ transform: true })) dto: RequestsDto) {
    return this.requestsService.create(dto);
  }

  @Get()
  async getAll(
    @Query('client_id') client_id: number | undefined,
    @Query('search') search: string | undefined,
  ) {
    return await this.requestsService.findAll(client_id, search);
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
