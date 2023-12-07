import {MigrationInterface, QueryRunner} from "typeorm";

export class vehicles1701892852840 implements MigrationInterface {
    name = 'vehicles1701892852840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" SERIAL NOT NULL, "car_number" character varying(300) NOT NULL, "model" character varying(300) NOT NULL, "lifting_capacity" real NOT NULL, "date_of_manufacture" date NOT NULL, "group_id" integer NOT NULL, CONSTRAINT "UQ_6604f0d20deb36837dd7a1f5c59" UNIQUE ("car_number"), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_9b5ca17f4e93f005c006d97b978" FOREIGN KEY ("group_id") REFERENCES "vehicle_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_9b5ca17f4e93f005c006d97b978"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
