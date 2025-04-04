"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newadditontoentity1743776681511 = void 0;
class Newadditontoentity1743776681511 {
    constructor() {
        this.name = 'Newadditontoentity1743776681511';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoriteCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "articles"`);
    }
}
exports.Newadditontoentity1743776681511 = Newadditontoentity1743776681511;
//# sourceMappingURL=1743776681511-Newadditontoentity.js.map