import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ClientsEntity } from 'src/model/clients.entity';

export class ClientsDto implements Readonly<ClientsDto> {
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
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

  public static from(dto: Partial<ClientsDto>) {
    const it = new ClientsDto();
    it.id = dto.id ?? 0;
    it.first_name = dto.first_name ?? '';
    it.last_name = dto.last_name ?? '';
    it.patronymic = dto.patronymic ?? '';
    it.username = dto.username ?? '';
    it.password = dto.password ?? '';
    return it;
  }

  public static fromEntity(entity: ClientsEntity) {
    return this.from({
      id: entity.id,
      last_name: entity.last_name,
      patronymic: entity.patronymic,
      first_name: entity.first_name,
      username: entity.username,
      password: entity.password,
    });
  }

  public toEntity() {
    const it = new ClientsEntity();
    it.id = this.id;
    it.first_name = this.first_name;
    it.last_name = this.last_name;
    it.patronymic = this.patronymic;
    it.username = this.username;
    it.password = this.password;
    return it;
  }
}
