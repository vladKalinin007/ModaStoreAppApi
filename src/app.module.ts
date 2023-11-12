import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './infrastructure/config/redis-config/redis.module';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';
import { AlsMiddleware } from 'infrastructure/config/als/als.middleware';
import { AuthModule } from 'infrastructure/modules/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    RedisModule,
    ApiModule,
    InfrastructureModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AlsMiddleware).forRoutes('*');
  }
}
