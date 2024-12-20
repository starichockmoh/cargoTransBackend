import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// id SERIAL PRIMARY KEY,
//     last_name VARCHAR(30),
//     first_name VARCHAR(30),
//     patronymic VARCHAR(30),
//     experience INT NOT NULL
@Entity({ name: 'characters' })
export class CharactersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  element: string;

  @Column({ type: 'varchar', length: 300 })
  stars: string;

  @Column({ type: 'varchar', length: 300 })
  type: string;

  @Column({ type: 'varchar', length: 300 })
  borderColor: string;

  @Column({ type: 'varchar', length: 300 })
  nameColor: string;

  @Column({ type: 'varchar', length: 300 })
  elementColor: string;

  @Column({ type: 'varchar', length: 300 })
  gender: string;
}
