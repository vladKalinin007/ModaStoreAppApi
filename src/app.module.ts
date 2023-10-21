import { Module } from '@nestjs/common';
import {ApiModule} from "./api/api.module";
import {EnvironmentConfigModule} from "./infrastructure/config/environment-config/environment-config.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      ApiModule,
      // EnvironmentConfigModule,
  ],
  providers: [],
})
export class AppModule {}
