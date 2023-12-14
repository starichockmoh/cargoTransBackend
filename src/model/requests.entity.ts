import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequestStatusesEntity } from 'src/model/request_statuses.entity';
import { VehiclesEntity } from 'src/model/vehicles.entity';
import { DriversEntity } from 'src/model/drivers.entity';

// CREATE TABLE requests
// (
//     id serial PRIMARY KEY,
//     name VARCHAR(30),
//     description VARCHAR(30),
//     cost DECIMAL,
//     date_created DATE NOT NULL,
//     driver_id INT NOT null,
//     vehicle_id INT NOT null,
//     status_id INT NOT null,
//     FOREIGN KEY (driver_id) REFERENCES drivers (id),
//     FOREIGN KEY (vehicle_id) REFERENCES vehicles (id),
//     FOREIGN KEY (status_id) REFERENCES request_statuses (id)
// );
@Entity({ name: 'requests' })
export class RequestsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'decimal' })
  cost: number;

  @Column({ type: 'date', nullable: false })
  date_created: string;

  @ManyToOne(() => DriversEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'driver_id' })
  driver: DriversEntity;

  @ManyToOne(() => VehiclesEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: VehiclesEntity;

  @ManyToOne(() => RequestStatusesEntity, undefined, {
    nullable: false,
    persistence: false,
  })
  @JoinColumn({ name: 'status_id' })
  request_status: RequestStatusesEntity;

  @Column({ type: 'int', nullable: false })
  driver_id: number;

  @Column({ type: 'int', nullable: false })
  vehicle_id: number;

  @Column({ type: 'int', nullable: false })
  status_id: number;
}
