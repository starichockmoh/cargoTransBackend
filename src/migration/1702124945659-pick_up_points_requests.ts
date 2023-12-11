import { MigrationInterface, QueryRunner } from 'typeorm';

export class pickUpPointsRequests1702124945659 implements MigrationInterface {
  name = 'pickUpPointsRequests1702124945659';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pick_up_points_requests_requests" ("pickUpPointsId" integer NOT NULL, "requestsId" integer NOT NULL, CONSTRAINT "PK_a90e29c968e53ab8a3d045680c4" PRIMARY KEY ("pickUpPointsId", "requestsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_00c137d58881c572e8177bf2ac" ON "pick_up_points_requests_requests" ("pickUpPointsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4370810d5466ce75fccaa4b164" ON "pick_up_points_requests_requests" ("requestsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "pick_up_points_requests_requests" ADD CONSTRAINT "FK_00c137d58881c572e8177bf2acb" FOREIGN KEY ("pickUpPointsId") REFERENCES "pick_up_points"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "pick_up_points_requests_requests" ADD CONSTRAINT "FK_4370810d5466ce75fccaa4b164d" FOREIGN KEY ("requestsId") REFERENCES "requests"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pick_up_points_requests_requests" DROP CONSTRAINT "FK_4370810d5466ce75fccaa4b164d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pick_up_points_requests_requests" DROP CONSTRAINT "FK_00c137d58881c572e8177bf2acb"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4370810d5466ce75fccaa4b164"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_00c137d58881c572e8177bf2ac"`,
    );
    await queryRunner.query(`DROP TABLE "pick_up_points_requests_requests"`);
  }
}
