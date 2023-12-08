import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// CREATE TABLE clients
// (
//     id serial PRIMARY KEY,
//     last_name VARCHAR(30),
//     first_name VARCHAR(30),
//     patronymic VARCHAR(30),
//     username VARCHAR(30) NOT NULL UNIQUE,
//     password VARCHAR(30)
// );
@Entity({ name: 'clients' })
export class ClientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  last_name: string;

  @Column({ type: 'varchar', length: 300 })
  first_name: string;

  @Column({ type: 'varchar', length: 300 })
  patronymic: string;

  @Column({ type: 'varchar', length: 300, nullable: false, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;
}
