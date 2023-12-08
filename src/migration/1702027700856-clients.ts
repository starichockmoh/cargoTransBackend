import {MigrationInterface, QueryRunner} from "typeorm";

export class clients1702027700856 implements MigrationInterface {
    name = 'clients1702027700856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "last_name" character varying(300) NOT NULL, "first_name" character varying(300) NOT NULL, "patronymic" character varying(300) NOT NULL, "username" character varying(300) NOT NULL, "password" character varying(300) NOT NULL, CONSTRAINT "UQ_a95860aa92d1420e005893043de" UNIQUE ("username"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
