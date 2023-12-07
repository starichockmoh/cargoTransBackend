import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { DriversEntity } from 'src/model/drivers.entity';

export class DriversDto implements Readonly<DriversDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  last_name: string;

  @ApiProperty({ required: true })
  @IsString()
  first_name: string;

  @ApiProperty({ required: true })
  @IsString()
  patronymic: string;

  @ApiProperty({ required: true })
  @IsNumber()
  experience: number;

  public static from(dto: Partial<DriversDto>) {
    const it = new DriversDto();
    it.id = dto.id ?? 0;
    it.first_name = dto.first_name ?? '';
    it.last_name = dto.last_name ?? '';
    it.patronymic = dto.patronymic ?? '';
    it.experience = dto.experience ?? 0;
    return it;
  }

  public static fromEntity(entity: DriversEntity) {
    return this.from({
      id: entity.id,
      experience: entity.experience,
      last_name: entity.last_name,
      patronymic: entity.patronymic,
      first_name: entity.first_name,
    });
  }

  public toEntity() {
    const it = new DriversEntity();
    it.id = this.id;
    it.first_name = this.first_name;
    it.last_name = this.last_name;
    it.patronymic = this.patronymic;
    it.experience = this.experience;
    return it;
  }
}
