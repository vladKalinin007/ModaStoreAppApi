import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {EnvironmentConfigService} from "./environment-config.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
        }),
    ],
    providers: [EnvironmentConfigService],
    exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
