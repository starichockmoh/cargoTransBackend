import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
