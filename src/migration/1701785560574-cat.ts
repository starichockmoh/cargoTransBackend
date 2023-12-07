import { MigrationInterface, QueryRunner } from 'typeorm';

export class cat1701785560574 implements MigrationInterface {
  name = 'cat1701785560574';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cat" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "age" integer NOT NULL, "breed" character varying(300) NOT NULL, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cat"`);
  }
}
