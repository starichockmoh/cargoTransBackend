import { MigrationInterface, QueryRunner } from 'typeorm';

export class requestStatuses1702036901177 implements MigrationInterface {
  name = 'requestStatuses1702036901177';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "request_statuses" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "UQ_a55d6860e990474e9c7ce216681" UNIQUE ("name"), CONSTRAINT "PK_ef199681a6c0dbabd29c07fa9f2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "request_statuses"`);
  }
}
