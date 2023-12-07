import {MigrationInterface, QueryRunner} from "typeorm";

export class catChange21701785787939 implements MigrationInterface {
    name = 'catChange21701785787939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "owner"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" ADD "owner" character varying(300) NOT NULL`);
    }

}
