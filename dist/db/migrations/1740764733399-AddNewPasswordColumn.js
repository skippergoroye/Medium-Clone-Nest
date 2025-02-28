"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewPasswordColumn1740764733399 = void 0;
class AddNewPasswordColumn1740764733399 {
    constructor() {
        this.name = 'AddNewPasswordColumn1740764733399';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileImgTwoFive" character varying NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileImgTwoFive"`);
    }
}
exports.AddNewPasswordColumn1740764733399 = AddNewPasswordColumn1740764733399;
//# sourceMappingURL=1740764733399-AddNewPasswordColumn.js.map