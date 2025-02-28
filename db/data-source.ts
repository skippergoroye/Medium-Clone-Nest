import { DataSource, DataSourceOptions } from 'typeorm';
import { resolve } from 'path';
import { UserEntity } from '../src/user/user.entity';
import { TagEntity } from '../src/tags/tags.entity';


export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'skipper',
  // database: 'your_database_name', // Ensure you set your database name
  synchronize: false, // Always false when using migrations
  logging: false, 
  // entities: [UserEntity, TagEntity], 
  // migrations: [resolve(__dirname, '../migrations/*.{ts,js}')], 
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],  
};


const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;

