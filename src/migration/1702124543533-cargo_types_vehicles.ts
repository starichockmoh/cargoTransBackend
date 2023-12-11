import { MigrationInterface, QueryRunner } from 'typeorm';

export class cargoTypesVehicles1702124543533 implements MigrationInterface {
  name = 'cargoTypesVehicles1702124543533';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "vehicle_groups_cargo_types_entities_cargo_types" ("vehicleGroupsId" integer NOT NULL, "cargoTypesId" integer NOT NULL, CONSTRAINT "PK_015d8012699996f29b04460c56c" PRIMARY KEY ("vehicleGroupsId", "cargoTypesId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8c32c0e5d22e4a336e29cbf2a6" ON "vehicle_groups_cargo_types_entities_cargo_types" ("vehicleGroupsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6aa106eea9676f170e82214203" ON "vehicle_groups_cargo_types_entities_cargo_types" ("cargoTypesId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle_groups_cargo_types_entities_cargo_types" ADD CONSTRAINT "FK_8c32c0e5d22e4a336e29cbf2a6f" FOREIGN KEY ("vehicleGroupsId") REFERENCES "vehicle_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle_groups_cargo_types_entities_cargo_types" ADD CONSTRAINT "FK_6aa106eea9676f170e822142032" FOREIGN KEY ("cargoTypesId") REFERENCES "cargo_types"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vehicle_groups_cargo_types_entities_cargo_types" DROP CONSTRAINT "FK_6aa106eea9676f170e822142032"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle_groups_cargo_types_entities_cargo_types" DROP CONSTRAINT "FK_8c32c0e5d22e4a336e29cbf2a6f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6aa106eea9676f170e82214203"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8c32c0e5d22e4a336e29cbf2a6"`,
    );
    await queryRunner.query(
      `DROP TABLE "vehicle_groups_cargo_types_entities_cargo_types"`,
    );
  }
}
