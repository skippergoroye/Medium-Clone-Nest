import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1740767923252 implements MigrationInterface {
    name = 'NewMigration1740767923252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileImgTwoSix" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileImgTwoSix"`);
    }

}
