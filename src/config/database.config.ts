import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('database', () => {
  let config: TypeOrmModuleOptions = {};

  if (process.env.DATABASE_SSL_ENABLE === 'true') {
    config = {
      name: 'default',
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_DBHOST,
      port: Number(process.env.DATABASE_DBPORT),
      database: process.env.DATABASE_DBNAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      synchronize: Boolean(process.env.DATABASE_SYNCRONIZED),
      migrationsTableName: process.env.DATABASE_MIGRATION_TABLE_NAME,
      entities: [`${__dirname}/../components/**/entities/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
      ssl: {
        rejectUnauthorized: false,
      },
    };
  } else {
    config = {
      name: 'default',
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_DBHOST,
      port: Number(process.env.DATABASE_DBPORT),
      database: process.env.DATABASE_DBNAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      synchronize: Boolean(process.env.DATABASE_SYNCRONIZED),
      migrationsTableName: process.env.DATABASE_MIGRATION_TABLE_NAME,
      entities: [`${__dirname}/../components/**/entities/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    };
  }

  return config;
});
