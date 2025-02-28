"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1740764288797 = void 0;
class NewMigration1740764288797 {
    constructor() {
        this.name = 'NewMigration1740764288797';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, "profileImg" character varying NOT NULL DEFAULT '', "profileImgTwo" character varying NOT NULL DEFAULT '', "profileImgTwoThre" character varying NOT NULL DEFAULT '', "profileImgTwoFour" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.NewMigration1740764288797 = NewMigration1740764288797;
//# sourceMappingURL=1740764288797-NewMigration.js.map