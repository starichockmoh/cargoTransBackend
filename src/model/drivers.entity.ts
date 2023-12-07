import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// id SERIAL PRIMARY KEY,
//     last_name VARCHAR(30),
//     first_name VARCHAR(30),
//     patronymic VARCHAR(30),
//     experience INT NOT NULL
@Entity({ name: 'drivers' })
export class DriversEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  last_name: string;

  @Column({ type: 'varchar', length: 300 })
  first_name: string;

  @Column({ type: 'varchar', length: 300 })
  patronymic: string;

  @Column({ type: 'int', nullable: false })
  experience: number;
}
