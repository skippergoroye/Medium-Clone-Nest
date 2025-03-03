"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1740991985273 = void 0;
class NewMigration1740991985273 {
    constructor() {
        this.name = 'NewMigration1740991985273';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, "profileImg" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }
}
exports.NewMigration1740991985273 = NewMigration1740991985273;
//# sourceMappingURL=1740991985273-NewMigration.js.map