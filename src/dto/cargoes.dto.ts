import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { CargoesEntity } from 'src/model/cargoes.entity';
import { RequestsDto } from 'src/dto/requests.dto';
import { CargoTypesDto } from 'src/dto/cargo_types.dto';
import { ClientsDto } from 'src/dto/clients.dto';
import { RequestsEntity } from 'src/model/requests.entity';

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

  @ApiProperty({ required: true })
  request: RequestsDto | undefined;

  @ApiProperty({ required: true })
  cargo_type: CargoTypesDto | undefined;

  @ApiProperty({ required: true })
  client: ClientsDto | undefined;

  public static from(dto: Partial<CargoesDto>) {
    const it = new CargoesDto();
    it.id = dto.id ?? 0;
    it.client_id = dto.client_id ?? 0;
    it.name = dto.name ?? '';
    it.request_id = dto.request_id ?? 0;
    it.type_id = dto.type_id ?? 0;
    it.weight = dto.weight ?? 0;
    it.request = dto.request;
    it.client = dto.client;
    it.cargo_type = dto.cargo_type;
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
      cargo_type: entity.cargo_type
        ? CargoTypesDto.fromEntity(entity.cargo_type)
        : undefined,
      client: entity.client ? ClientsDto.fromEntity(entity.client) : undefined,
      request: entity.request
        ? RequestsDto.fromEntity(entity.request)
        : undefined,
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
