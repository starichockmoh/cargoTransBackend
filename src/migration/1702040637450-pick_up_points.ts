import { MigrationInterface, QueryRunner } from 'typeorm';

export class pickUpPoints1702040637450 implements MigrationInterface {
  name = 'pickUpPoints1702040637450';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pick_up_points" ("id" SERIAL NOT NULL, "town" character varying(300) NOT NULL, "street" character varying(300) NOT NULL, "house_number" character varying(300) NOT NULL, "corps" character varying(300) NOT NULL, CONSTRAINT "PK_894b0e10bfcf140c60c79bbd087" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pick_up_points"`);
  }
}
