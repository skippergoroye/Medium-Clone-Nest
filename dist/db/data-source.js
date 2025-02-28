"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'skipper',
    synchronize: false,
    logging: false,
    entities: [(0, path_1.resolve)(__dirname, '../entity/*.{ts,js}')],
    migrations: [(0, path_1.resolve)(__dirname, '../migrations/*.{ts,js}')],
};
const AppDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map