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
import { CharactersDto } from 'src/dto/characters.dto';
import { CharactersService } from 'src/services/characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}
  @Post()
  async postCharacter(
    @Body(new ValidationPipe({ transform: true })) charactersDto: CharactersDto,
  ) {
    return this.charactersService.create(charactersDto);
  }

  @Get()
  async getAll(@Query('search') search: string | undefined) {
    return await this.charactersService.findAll(search);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.charactersService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) dto: CharactersDto,
  ) {
    return this.charactersService.update(Number(id), dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.charactersService.remove(Number(id));
  }
}
