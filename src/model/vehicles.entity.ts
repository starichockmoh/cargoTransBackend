import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VehicleGroupsEntity } from 'src/model/vehicle_groups.entity';

// CREATE TABLE vehicles
// (
//     id serial PRIMARY KEY,
//     car_number VARCHAR(30) UNIQUE,
//     model VARCHAR(256),
//     lifting_capacity REAL not NULL,
//     date_of_manufacture DATE not NULL,
//     group_id INT not null,
//     FOREIGN KEY (group_id) REFERENCES vehicle_groups (id)
// );
@Entity({ name: 'vehicles' })
export class VehiclesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, unique: true })
  car_number: string;

  @Column({ type: 'varchar', length: 300 })
  model: string;

  @Column({ type: 'real', nullable: false })
  lifting_capacity: number;

  @Column({ type: 'date', nullable: false })
  date_of_manufacture: string;

  @ManyToOne(() => VehicleGroupsEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'group_id' })
  group: VehicleGroupsEntity;

  @Column({ type: 'int' })
  group_id: number;
}
