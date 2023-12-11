import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequestsEntity } from 'src/model/requests.entity';

// CREATE TABLE pick_up_points
// (
//     id serial PRIMARY KEY,
//     town VARCHAR(30),
//     street VARCHAR(30),
//     house_number VARCHAR(30),
//     corps VARCHAR(30)
// );
@Entity({ name: 'pick_up_points' })
export class PickUpPointsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  town: string;

  @Column({ type: 'varchar', length: 300 })
  street: string;

  @Column({ type: 'varchar', length: 300 })
  house_number: string;

  @Column({ type: 'varchar', length: 300 })
  corps: string;

  @ManyToMany(() => RequestsEntity)
  @JoinTable()
  requests: RequestsEntity[];
}
