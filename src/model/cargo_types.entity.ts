import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// CREATE TABLE cargo_types
// (
//     id serial PRIMARY KEY,
//     name VARCHAR(30) UNIQUE
// );
@Entity({ name: 'cargo_types' })
export class CargoTypesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, unique: true })
  name: string;
}
