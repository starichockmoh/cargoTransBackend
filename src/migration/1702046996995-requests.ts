import { MigrationInterface, QueryRunner } from 'typeorm';

export class requests1702046996995 implements MigrationInterface {
  name = 'requests1702046996995';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "requests" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "cost" numeric NOT NULL, "date_created" date NOT NULL, "driver_id" integer NOT NULL, "vehicle_id" integer NOT NULL, "status_id" integer NOT NULL, CONSTRAINT "PK_0428f484e96f9e6a55955f29b5f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "requests" ADD CONSTRAINT "FK_5c1053a84fdbe26c7388cdd1049" FOREIGN KEY ("driver_id") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "requests" ADD CONSTRAINT "FK_808f9f7eee6f1b8034ed926b068" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "requests" ADD CONSTRAINT "FK_40439e52fda158f5cced900a7bb" FOREIGN KEY ("status_id") REFERENCES "request_statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "requests" DROP CONSTRAINT "FK_40439e52fda158f5cced900a7bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "requests" DROP CONSTRAINT "FK_808f9f7eee6f1b8034ed926b068"`,
    );
    await queryRunner.query(
      `ALTER TABLE "requests" DROP CONSTRAINT "FK_5c1053a84fdbe26c7388cdd1049"`,
    );
    await queryRunner.query(`DROP TABLE "requests"`);
  }
}
