import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString } from 'class-validator';
import { VehiclesEntity } from 'src/model/vehicles.entity';

export class VehiclesDto implements Readonly<VehiclesDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  car_number: string;

  @ApiProperty({ required: true })
  @IsString()
  model: string;

  @ApiProperty({ required: true })
  @IsNumber()
  lifting_capacity: number;

  @ApiProperty({ required: true })
  @IsDateString()
  date_of_manufacture: string;

  @ApiProperty({ required: true })
  @IsNumber()
  group_id: number;

  public static from(dto: Partial<VehiclesDto>) {
    const it = new VehiclesDto();
    it.id = dto.id ?? 0;
    it.group_id = dto.group_id ?? 0;
    it.model = dto.model ?? '';
    it.date_of_manufacture = dto.date_of_manufacture ?? '';
    it.car_number = dto.car_number ?? '';
    it.lifting_capacity = dto.lifting_capacity ?? 0;
    return it;
  }

  public static fromEntity(entity: VehiclesEntity) {
    return this.from({
      id: entity.id,
      model: entity.model,
      car_number: entity.car_number,
      date_of_manufacture: entity.date_of_manufacture,
      lifting_capacity: entity.lifting_capacity,
      group_id: entity.group_id,
    });
  }

  public toEntity() {
    const it = new VehiclesEntity();
    it.id = this.id;
    it.group_id = this.group_id;
    it.model = this.model;
    it.date_of_manufacture = this.date_of_manufacture;
    it.car_number = this.car_number;
    it.lifting_capacity = this.lifting_capacity;
    return it;
  }
}
