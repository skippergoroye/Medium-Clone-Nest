import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1740767923252 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
