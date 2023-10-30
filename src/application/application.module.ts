import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CqrsModule } from '@nestjs/cqrs';
import { GetCategoriesQueryHandler } from './use-cases/catalog/category/queries/get-categories.query/handler/get-categories.handler';
import { GetProductsQueryHandler } from './use-cases/catalog/product/queries/get-products.query/handler/get-products.handler';
import { GetBasketByIdHandler } from './use-cases/customer/basket/queries/get-basket-by-id.query/handler/get-basket-by-id.handler';
import { CreateBasketHandler } from './use-cases/customer/basket/commands/create-basket.command/handler/create-basket.handler';
import { DeleteBasketHandler } from './use-cases/customer/basket/commands/delete-basket.command/handler/delete-basket.handler';
import { UpdateBasketHandler } from './use-cases/customer/basket/commands/update-basket.command/handler/update-basket.handler';
import { GetWishlistByIdHandler } from './use-cases/customer/wishlist/queries/get-wishlist-by-id.query/handler/get-wishlist-by-id.handler';
import { CreateWishlistHandler } from './use-cases/customer/wishlist/commands/create-wishlist.command/handler/create-wishlist.handler';
import { UpdateWishlistHandler } from './use-cases/customer/wishlist/commands/update-wishlist.command/handler/update-wishlist.handler';
import { DeleteWishlistHandler } from './use-cases/customer/wishlist/commands/delete-wishlist.command/handler/delete-wishlist.handler';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    GetProductsQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
    GetWishlistByIdHandler,
    CreateWishlistHandler,
    UpdateWishlistHandler,
    DeleteWishlistHandler,
  ],
  exports: [
    CqrsModule,
    InfrastructureModule,
    GetProductsQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
    GetWishlistByIdHandler,
    CreateWishlistHandler,
    UpdateWishlistHandler,
    DeleteWishlistHandler,
  ],
})
export class ApplicationModule {}
