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
import type { Request } from 'express';
import { CatsDto } from 'src/dto';
import { CatsService } from 'src/services';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async postCat(
    @Body(new ValidationPipe({ transform: true })) catsDto: CatsDto,
  ) {
    return this.catsService.create(catsDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getCats(@Req() request: Request) {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async getCat(@Param('id') id: string) {
    return await this.catsService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) catsDto: CatsDto,
  ) {
    return this.catsService.update(Number(id), catsDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.catsService.remove(Number(id));
  }

  // @Get('docs')
  // @Redirect('https://nestjs.ru', 302)
  // async getDocs(@Query('version') version: string) {
  //   if (version && version === '5') {
  //     return { url: 'https://nestjs.ru/v5/' };
  //   }
  // }
}
