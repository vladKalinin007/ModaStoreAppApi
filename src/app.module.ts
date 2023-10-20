import { Module } from '@nestjs/common';
import {ApiModule} from "./api/api.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ApiModule,
      ConfigModule.forRoot({envFilePath: '.env'}),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'AKSjhh77**yh',
        database: 'ModaStoreDB',
        synchronize: true,
          autoLoadEntities: true,
          entities: ['dist/**/*.entity{.ts,.js}'],
      }),
  ],
  providers: [],
})
export class AppModule {}
