import { MigrationInterface, QueryRunner } from 'typeorm';

export class vehicleGroups1701889874286 implements MigrationInterface {
  name = 'vehicleGroups1701889874286';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "vehicle_groups" ("id" SERIAL NOT NULL, "group_name" character varying(300) NOT NULL, CONSTRAINT "UQ_295b53f38b8b081673c23bb7647" UNIQUE ("group_name"), CONSTRAINT "PK_36369b43afd65d1197955de8918" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "vehicle_groups"`);
  }
}
