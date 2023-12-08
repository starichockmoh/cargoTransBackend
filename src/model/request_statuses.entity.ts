import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// CREATE TABLE request_statuses
// (
//     id serial PRIMARY KEY,
//     name VARCHAR(30) UNIQUE
// );
@Entity({ name: 'request_statuses' })
export class RequestStatusesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, unique: true })
  name: string;
}
