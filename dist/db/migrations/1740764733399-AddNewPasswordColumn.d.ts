import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddNewPasswordColumn1740764733399 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
