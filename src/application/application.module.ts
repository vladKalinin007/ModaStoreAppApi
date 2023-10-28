import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CqrsModule } from '@nestjs/cqrs';
import { GetCategoriesQueryHandler } from './use-cases/catalog/category/queries/handlers/get-categories.queryhandler';
import { GetProductQueryHandler } from './use-cases/catalog/product/queries/handlers/get-product.queryhandler';
import { GetBasketByIdHandler } from './use-cases/customer/basket/queries/get-basket-by-id.query/handler/get-basket-by-id.handler';
import { CreateBasketHandler } from './use-cases/customer/basket/commands/create-basket.command/handler/create-basket.handler';
import { DeleteBasketHandler } from './use-cases/customer/basket/commands/delete-basket.command/handler/delete-basket.handler';
import { UpdateBasketHandler } from './use-cases/customer/basket/commands/update-basket.command/handler/update-basket.handler';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    GetProductQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
  ],
  exports: [
    CqrsModule,
    InfrastructureModule,
    GetProductQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
  ],
})
export class ApplicationModule {}
