import {MigrationInterface, QueryRunner} from "typeorm";

export class cargoes1702052068281 implements MigrationInterface {
    name = 'cargoes1702052068281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cargoes" ("id" SERIAL NOT NULL, "name" character varying(300) NOT NULL, "weight" real NOT NULL, "request_id" integer NOT NULL, "client_id" integer NOT NULL, "type_id" integer NOT NULL, CONSTRAINT "PK_72f150ffcb9d154fd83bc9a800d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cargoes" ADD CONSTRAINT "FK_2ff5c8a08c485c054f57fb554c3" FOREIGN KEY ("request_id") REFERENCES "requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cargoes" ADD CONSTRAINT "FK_3485c4101ffa19957622b8783f7" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cargoes" ADD CONSTRAINT "FK_7b1c80009a7e5063277e424da7d" FOREIGN KEY ("type_id") REFERENCES "cargo_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargoes" DROP CONSTRAINT "FK_7b1c80009a7e5063277e424da7d"`);
        await queryRunner.query(`ALTER TABLE "cargoes" DROP CONSTRAINT "FK_3485c4101ffa19957622b8783f7"`);
        await queryRunner.query(`ALTER TABLE "cargoes" DROP CONSTRAINT "FK_2ff5c8a08c485c054f57fb554c3"`);
        await queryRunner.query(`DROP TABLE "cargoes"`);
    }

}
