import { DataSource, DataSourceOptions } from 'typeorm';
import { resolve } from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'skipper',
  // database: "PostgreSQL 17",
  // synchronize: true,
  // logging: true,
  entities: ['src/entity/*.ts'],
  //   migrations: ["src/migrations/**/*.ts"],
  migrations: [resolve(__dirname, 'migrations/*{.ts,.js}')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
