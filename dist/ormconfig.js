"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.ormconfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "skipper",
    synchronize: true,
    logging: true,
    entities: ['src/entity/*.ts'],
};
exports.AppDataSource = new typeorm_1.DataSource(exports.ormconfig);
//# sourceMappingURL=ormconfig.js.map