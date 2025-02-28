import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1740764288797 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
