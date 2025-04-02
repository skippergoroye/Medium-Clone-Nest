"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taglist1743583447059 = void 0;
class Taglist1743583447059 {
    constructor() {
        this.name = 'Taglist1743583447059';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoriteCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "articles"`);
    }
}
exports.Taglist1743583447059 = Taglist1743583447059;
//# sourceMappingURL=1743583447059-Taglist.js.map