import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CharactersEntity } from 'src/model/characters.entity';

export class CharactersDto implements Readonly<CharactersDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  element: string;

  @ApiProperty({ required: true })
  @IsString()
  stars: string;

  @ApiProperty({ required: true })
  @IsString()
  type: string;

  @ApiProperty({ required: true })
  @IsString()
  borderColor: string;

  @ApiProperty({ required: true })
  @IsString()
  nameColor: string;

  @ApiProperty({ required: true })
  @IsString()
  elementColor: string;

  @ApiProperty({ required: true })
  @IsString()
  gender: string;

  public static from(dto: Partial<CharactersDto>) {
    const it = new CharactersDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    it.element = dto.element ?? '';
    it.stars = dto.stars ?? '';
    it.type = dto.type ?? '';
    it.borderColor = dto.borderColor ?? '';
    it.elementColor = dto.elementColor ?? '';
    it.nameColor = dto.nameColor ?? '';
    it.gender = dto.gender ?? '';
    return it;
  }

  public static fromEntity(entity: CharactersEntity) {
    return this.from({
      id: entity.id,
      type: entity.type,
      gender: entity.gender,
      element: entity.element,
      borderColor: entity.borderColor,
      nameColor: entity.nameColor,
      elementColor: entity.elementColor,
      name: entity.name,
      stars: entity.stars,
    });
  }

  public toEntity() {
    const it = new CharactersEntity();
    it.id = this.id;
    it.name = this.name;
    it.element = this.element;
    it.stars = this.stars;
    it.type = this.type;
    it.borderColor = this.borderColor;
    it.elementColor = this.elementColor;
    it.nameColor = this.nameColor;
    it.gender = this.gender;
    return it;
  }
}
