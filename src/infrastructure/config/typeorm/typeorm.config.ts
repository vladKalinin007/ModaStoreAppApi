import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const config = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    schema: process.env.POSTGRES_SCHEMA,
    migrationsRun: true,
    migrations: ['dist/infrastructure/database/migrations/**/*{.ts,.js}'],
});

config
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

console.log(config);

export default config;
