import { DataSource, DataSourceOptions } from 'typeorm';
import { resolve } from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'skipper',
  // database: 'your_database_name', // Ensure you set your database name
  synchronize: false, // Always false when using migrations
  logging: false, // Set to true if you want SQL logs
  entities: ['src/user/*.entity.ts'], // Adjusted path
  migrations: [resolve(__dirname, '../migrations/*.{ts,js}')], // Adjusted path
};

// Initialize the DataSource
const AppDataSource = new DataSource(dataSourceOptions);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default AppDataSource;

