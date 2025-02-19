"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.ormconfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
exports.ormconfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV !== 'production',
    entities: ['src/entity/*.ts'],
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};
exports.AppDataSource = new typeorm_1.DataSource(exports.ormconfig);
//# sourceMappingURL=ormconfig.js.map