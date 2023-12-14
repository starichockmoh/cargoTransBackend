import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequestsEntity } from 'src/model/requests.entity';
import { ClientsEntity } from 'src/model/clients.entity';
import { CargoTypesEntity } from 'src/model/cargo_types.entity';

// CREATE TABLE cargoes
// (
//     id serial PRIMARY KEY,
//     name VARCHAR(30),
//     weight REAL,
//     request_id INT,
//     client_id INT NOT null,
//     type_id INT NOT null,
//     FOREIGN KEY (request_id) REFERENCES requests (id),
//     FOREIGN KEY (client_id) REFERENCES clients (id),
//     FOREIGN KEY (type_id) REFERENCES cargo_types (id)
// );
@Entity({ name: 'cargoes' })
export class CargoesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'real' })
  weight: number;

  @ManyToOne(() => RequestsEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'request_id' })
  request: RequestsEntity;

  @ManyToOne(() => ClientsEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'client_id' })
  client: ClientsEntity;

  @ManyToOne(() => CargoTypesEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'type_id' })
  cargo_type: CargoTypesEntity;

  @Column({ type: 'int', nullable: false })
  request_id: number;

  @Column({ type: 'int', nullable: false })
  client_id: number;

  @Column({ type: 'int', nullable: false })
  type_id: number;
}
