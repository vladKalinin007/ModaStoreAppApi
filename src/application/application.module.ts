import { Module } from '@nestjs/common';
import { QueryHandlerModule } from './modules/query-handler.module';
import { CommandHandlerModule } from './modules/command-handler.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule, QueryHandlerModule, CommandHandlerModule],
  exports: [CqrsModule, QueryHandlerModule, CommandHandlerModule],
})
export class ApplicationModule {}
