import {Module} from '@nestjs/common';
import {ApiModule} from "./api/api.module";
import {ConfigModule} from "@nestjs/config";
import {RedisModule} from "./infrastructure/config/redis-config/redis.module";

@Module({
  imports: [
      ConfigModule.forRoot(),
      RedisModule,
      ApiModule,
  ],
  providers: [
  ],
})
export class AppModule {
}

