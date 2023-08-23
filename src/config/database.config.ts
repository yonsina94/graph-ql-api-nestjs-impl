import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  if (process.env.DATABASE_SSL_ENABLE === 'true') {
    return {
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
    return {
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
});
