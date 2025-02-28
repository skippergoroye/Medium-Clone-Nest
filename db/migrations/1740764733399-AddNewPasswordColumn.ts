import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewPasswordColumn1740764733399 implements MigrationInterface {
    name = 'AddNewPasswordColumn1740764733399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileImgTwoFive" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileImgTwoFive"`);
    }

}
