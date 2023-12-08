import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { RequestStatusesEntity } from 'src/model/request_statuses.entity';

export class RequestStatusesDto implements Readonly<RequestStatusesDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  public static from(dto: Partial<RequestStatusesDto>) {
    const it = new RequestStatusesDto();
    it.id = dto.id ?? 0;
    it.name = dto.name ?? '';
    return it;
  }

  public static fromEntity(entity: RequestStatusesEntity) {
    return this.from({
      id: entity.id,
      name: entity.name,
    });
  }

  public toEntity() {
    const it = new RequestStatusesEntity();
    it.id = this.id;
    it.name = this.name;
    return it;
  }
}
