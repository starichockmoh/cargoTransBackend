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
import type { PostRequestDto } from 'src/dto';
import { RequestsService } from 'src/services';

@Controller('requests')
export class RequestsController {
  constructor(private requestsService: RequestsService) {}
  @Post()
  async create(@Body() postDto: PostRequestDto) {
    return this.requestsService.create(postDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(@Query() query: { limit: string }) {
    return this.requestsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.requestsService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: PostRequestDto) {
    return this.requestsService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.requestsService.remove(Number(id));
  }
}
