import { CreateOrUpdatePaymentIntentHandler } from './use-cases/customer/payment/commands/create-or-update-payment-intent.command/handler/create-or-update-payment-intent.handler';
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
// import { DeleteWishlistHandler } from './use-cases/customer/wishlist/commands/delete-wishlist.command/handler/delete-wishlist.handler';
import { LoginHandler } from './use-cases/identity/authentication/commands/login.command/handler/login.handler';
import { RegisterHandler } from './use-cases/identity/authentication/commands/register.command/handler/register.handler';
import { GetProductBrandsHandler } from './use-cases/catalog/product-brand/queries/get-product-brands.query/handler/get-product-brands.handler';
import { GetProductTypesHandler } from './use-cases/catalog/product-type/queries/get-product-types.query/handler/get-product-types.handler';
import { GetPicturesByTypeHandler } from './use-cases/common/pictures/queries/get-pictures-by-type.query/handler/get-pictures-by-type.handler';

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
    // DeleteWishlistHandler,
    LoginHandler,
    RegisterHandler,
    GetProductBrandsHandler,
    GetProductTypesHandler,
    GetPicturesByTypeHandler,
    CreateOrUpdatePaymentIntentHandler,
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
    // DeleteWishlistHandler,
    LoginHandler,
    RegisterHandler,
    GetProductBrandsHandler,
    GetProductTypesHandler,
    GetPicturesByTypeHandler,
    CreateOrUpdatePaymentIntentHandler,
  ],
})
export class ApplicationModule {}
