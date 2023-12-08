import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString } from 'class-validator';
import { RequestsEntity } from 'src/model/requests.entity';

export class RequestsDto implements Readonly<RequestsDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsNumber()
  cost: number;

  @ApiProperty({ required: true })
  @IsDateString()
  date_created: string;

  @ApiProperty({ required: true })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ required: true })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ required: true })
  @IsNumber()
  status_id: number;

  public static from(dto: Partial<RequestsDto>) {
    const it = new RequestsDto();
    it.id = dto.id ?? 0;
    it.cost = dto.cost ?? 0;
    it.vehicle_id = dto.vehicle_id ?? 0;
    it.status_id = dto.status_id ?? 0;
    it.driver_id = dto.driver_id ?? 0;
    it.date_created = dto.date_created ?? '';
    it.description = dto.description ?? '';
    it.name = dto.name ?? '';
    return it;
  }

  public static fromEntity(entity: RequestsEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      description: entity.description,
      driver_id: entity.driver_id,
      status_id: entity.status_id,
      vehicle_id: entity.vehicle_id,
      date_created: entity.date_created,
      cost: entity.cost,
    });
  }

  public toEntity() {
    const it = new RequestsEntity();
    it.id = this.id;
    it.cost = this.cost;
    it.vehicle_id = this.vehicle_id;
    it.status_id = this.status_id;
    it.driver_id = this.driver_id;
    it.date_created = this.date_created;
    it.description = this.description;
    it.name = this.name;
    return it;
  }
}
