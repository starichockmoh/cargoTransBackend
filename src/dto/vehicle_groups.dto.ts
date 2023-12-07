import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { VehicleGroupsEntity } from 'src/model/vehicle_groups.entity';

export class VehicleGroupsDto implements Readonly<VehicleGroupsDto> {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  group_name: string;

  public static from(dto: Partial<VehicleGroupsDto>) {
    const it = new VehicleGroupsDto();
    it.id = dto.id ?? 0;
    it.group_name = dto.group_name ?? '';
    return it;
  }

  public static fromEntity(entity: VehicleGroupsEntity) {
    return this.from({
      id: entity.id,
      group_name: entity.group_name,
    });
  }

  public toEntity() {
    const it = new VehicleGroupsEntity();
    it.id = this.id;
    it.group_name = this.group_name;
    return it;
  }
}
