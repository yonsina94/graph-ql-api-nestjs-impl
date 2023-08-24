import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { join } from 'path';
import { CustomerModule } from './components/customer/customer.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig, appConfig],
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule.forFeature(databaseConfig)],
    //   useFactory: (config: ConfigType<typeof databaseConfig>) => ({
    //     ...config,
    //   }),
    //   inject: [databaseConfig.KEY],
    // }),
    TypeOrmModule.forRoot({
      type: 'sqljs',
      autoLoadEntities: true,
      autoSave: true,
      synchronize: true,
      location: join(__dirname, '..', 'database.sqlite'),
      entities: [join(__dirname, `/components/**/entities/*.entity{.ts,.js}`)],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(
      `dirname PATH: ${join(
        __dirname,
        '.',
        `/components/**/entities/*.entity{.ts,.js}`,
      )}`,
    );
  }
}
