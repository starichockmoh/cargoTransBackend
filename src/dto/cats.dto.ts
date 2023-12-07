import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { CatEntity } from 'src/model/cat.entity';

export class CatsDto implements Readonly<CatsDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNumber()
  age: number;

  @ApiProperty({ required: true })
  @IsString()
  breed: string;

  public static from(dto: Partial<CatsDto>) {
    const it = new CatsDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.age = dto.age ?? 0;
    it.breed = dto.breed ?? '';
    return it;
  }

  public static fromEntity(entity: CatEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      breed: entity.breed,
      age: entity.age,
    });
  }

  public toEntity() {
    const it = new CatEntity();
    it.id = this.id;
    it.name = this.name;
    it.age = this.age;
    it.breed = this.breed;
    return it;
  }
}
