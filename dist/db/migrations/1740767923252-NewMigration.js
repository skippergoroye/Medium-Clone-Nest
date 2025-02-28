"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1740767923252 = void 0;
class NewMigration1740767923252 {
    constructor() {
        this.name = 'NewMigration1740767923252';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileImgTwoSix" character varying NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileImgTwoSix"`);
    }
}
exports.NewMigration1740767923252 = NewMigration1740767923252;
//# sourceMappingURL=1740767923252-NewMigration.js.map