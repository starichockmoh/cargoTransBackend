import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { CargoesEntity } from 'src/model/cargoes.entity';

export class CargoesDto implements Readonly<CargoesDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNumber()
  weight: number;

  @ApiProperty({ required: true })
  @IsNumber()
  request_id: number;

  @ApiProperty({ required: true })
  @IsNumber()
  client_id: number;

  @ApiProperty({ required: true })
  @IsNumber()
  type_id: number;

  public static from(dto: Partial<CargoesDto>) {
    const it = new CargoesDto();
    it.id = dto.id ?? 0;
    it.client_id = dto.client_id ?? 0;
    it.name = dto.name ?? '';
    it.request_id = dto.request_id ?? 0;
    it.type_id = dto.type_id ?? 0;
    it.weight = dto.weight ?? 0;
    return it;
  }

  public static fromEntity(entity: CargoesEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
      weight: entity.weight,
      type_id: entity.type_id,
      request_id: entity.request_id,
      client_id: entity.client_id,
    });
  }

  public toEntity() {
    const it = new CargoesEntity();
    it.id = this.id;
    it.client_id = this.client_id;
    it.name = this.name;
    it.request_id = this.request_id;
    it.type_id = this.type_id;
    it.weight = this.weight;
    return it;
  }
}
