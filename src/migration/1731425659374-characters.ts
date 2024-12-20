import {MigrationInterface, QueryRunner} from "typeorm";

export class characters1731425659374 implements MigrationInterface {
    name = 'characters1731425659374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characters" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "element" character varying(300) NOT NULL, "stars" character varying(300) NOT NULL, "type" character varying(300) NOT NULL, "borderColor" character varying(300) NOT NULL, "nameColor" character varying(300) NOT NULL, "elementColor" character varying(300) NOT NULL, "gender" character varying(300) NOT NULL, CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "characters"`);
    }

}
