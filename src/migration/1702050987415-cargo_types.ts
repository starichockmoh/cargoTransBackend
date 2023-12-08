import {MigrationInterface, QueryRunner} from "typeorm";

export class cargoTypes1702050987415 implements MigrationInterface {
    name = 'cargoTypes1702050987415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cargo_types" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "UQ_aa5f0ad81389f203d6f32da8b84" UNIQUE ("name"), CONSTRAINT "PK_db1aa5f07b0c5ea996eaea03394" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cargo_types"`);
    }

}
