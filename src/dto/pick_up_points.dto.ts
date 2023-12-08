import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PickUpPointsEntity } from 'src/model/pick_up_points.entity';

export class PickUpPointsDto implements Readonly<PickUpPointsDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  town: string;

  @ApiProperty({ required: true })
  @IsString()
  street: string;

  @ApiProperty({ required: true })
  @IsString()
  house_number: string;

  @ApiProperty({ required: true })
  @IsString()
  corps: string;

  public static from(dto: Partial<PickUpPointsDto>) {
    const it = new PickUpPointsDto();
    it.id = dto.id ?? 0;
    it.town = dto.town ?? '';
    it.street = dto.street ?? '';
    it.house_number = dto.house_number ?? '';
    it.corps = dto.corps ?? '';
    return it;
  }

  public static fromEntity(entity: PickUpPointsEntity) {
    return this.from({
      id: entity.id,
      town: entity.town,
      street: entity.street,
      house_number: entity.house_number,
      corps: entity.corps,
    });
  }

  public toEntity() {
    const it = new PickUpPointsEntity();
    it.id = this.id;
    it.town = this.town;
    it.street = this.street;
    it.house_number = this.house_number;
    it.corps = this.corps;
    return it;
  }
}
