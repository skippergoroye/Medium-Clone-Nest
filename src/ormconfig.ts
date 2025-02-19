// import { DataSource, DataSourceOptions } from 'typeorm';



// MongoDB
// export const ormconfig: DataSourceOptions = {
//   type: "mongodb",
//   url: "mongodb+srv://skippertech:skipper123Tech@nodejs.79xtnsg.mongodb.net/medium-clone?retryWrites=true&w=majority",
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
//   url: "postgresql://medium-clone_owner:npg_VBqhNiM3bZ9p@ep-shrill-truth-a5cd11cw-pooler.us-east-2.aws.neon.tech/medium-clone?sslmode=require",
//   synchronize: true,
//   logging: true,
//   entities: ['src/entity/*.ts'],
//   ssl: true, // Ensure SSL is used for Neon.tech
// };

// export const AppDataSource = new DataSource(ormconfig);






import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const ormconfig: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV !== 'production', 
  logging: process.env.NODE_ENV !== 'production',
  entities: ['src/entity/*.ts'],
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, 
};

export const AppDataSource = new DataSource(ormconfig);







