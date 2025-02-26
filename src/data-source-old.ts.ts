// import { DataSource, DataSourceOptions } from 'typeorm';



// MongoDB
// export const ormconfig: DataSourceOptions = {
//   type: "mongodb",
//   url: process.env.DATABASE_URL,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   synchronize: true, 
//   logging: true,
//   entities: ['src/entity/*.ts'],
// };

// export const AppDataSource = new DataSource(ormconfig);





// PostgresSQL

// export const ormconfig: DataSourceOptions = {
//   type: "postgres",
//   url: POStGRES_DATABASE_URL
//   synchronize: true,
//   logging: true,
//   entities: ['src/entity/*.ts'],
//   ssl: true, // Ensure SSL is used for Neon.tech
// };

// export const AppDataSource = new DataSource(ormconfig);





// online postgress
// import { DataSource, DataSourceOptions } from 'typeorm';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

// export const ormconfig: DataSourceOptions = {
//   type: 'postgres',
//   url: process.env.DATABASE_URL,
//   synchronize: process.env.NODE_ENV !== 'production', 
//   logging: process.env.NODE_ENV !== 'production',
//   entities: ['src/entity/*.ts'],
//   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, 
// };

// export const AppDataSource = new DataSource(ormconfig);




// Localhost postgress
// import { DataSource, DataSourceOptions } from 'typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const ormconfig: DataSourceOptions = {
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "skipper",
//   // database: "Medium-Clone",
//   synchronize: false, // Automatically sync schema (disable in production)
//   logging: true,
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   // entities: ['src/entity/*.ts'],
//   migrations: ["src/migrations/**/*.ts"],
  
// };

// export const AppDataSource = new DataSource(ormconfig);












