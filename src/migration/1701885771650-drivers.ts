import { MigrationInterface, QueryRunner } from 'typeorm';

export class drivers1701885771650 implements MigrationInterface {
  name = 'drivers1701885771650';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "drivers" ("id" SERIAL NOT NULL, "last_name" character varying(300) NOT NULL, "first_name" character varying(300) NOT NULL, "patronymic" character varying(300) NOT NULL, "experience" integer NOT NULL, CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "drivers"`);
  }
}
