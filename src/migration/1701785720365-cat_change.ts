import {MigrationInterface, QueryRunner} from "typeorm";

export class catChange1701785720365 implements MigrationInterface {
    name = 'catChange1701785720365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" ADD "owner" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "owner"`);
    }

}
