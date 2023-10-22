import {Module} from "@nestjs/common";
import {CacheModule} from "@nestjs/cache-manager";
import * as redisStore from "cache-manager-redis-store";

@Module({
    imports: [
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT),
            password: process.env.REDIS_PASSWORD,
        }),
    ],
})
export class RedisModule {}
