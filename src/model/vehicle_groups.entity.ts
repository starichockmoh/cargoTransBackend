import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CargoTypesEntity } from 'src/model/cargo_types.entity';

// CREATE TABLE vehicle_groups
// (
//     id SERIAL PRIMARY KEY,
//     group_name VARCHAR(30) UNIQUE
// );
@Entity({ name: 'vehicle_groups' })
export class VehicleGroupsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, unique: true })
  group_name: string;

  @ManyToMany(() => CargoTypesEntity)
  @JoinTable()
  cargo_types_entities: CargoTypesEntity[];
}
