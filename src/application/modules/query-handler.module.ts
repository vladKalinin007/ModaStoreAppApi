import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetCategoriesQueryHandler } from 'application/use-cases/catalog/category/queries/get-categories.query/handler/get-categories.handler';
import { GetProductBrandsHandler } from 'application/use-cases/catalog/product-brand/queries/get-product-brands.query/handler/get-product-brands.handler';
import { GetProductTypeByCategoryHandler } from 'application/use-cases/catalog/product-type/queries/get-product-type-by-category.query/handler/get-product-type-by-category.handler';
import { GetProductTypeByIdHandler } from 'application/use-cases/catalog/product-type/queries/get-product-type-by-id.query/handler/get-product-type-by-id.handler';
import { GetProductTypesHandler } from 'application/use-cases/catalog/product-type/queries/get-product-types.query/handler/get-product-types.handler';
import { GetProductAttributesHandler } from 'application/use-cases/catalog/product/queries/get-product-attributes.query/handler/get-product-attributes.handler';
import { GetProductColorsHandler } from 'application/use-cases/catalog/product/queries/get-product-colors.query/handler/get-product-colors.handler';
import { GetProductSizesHandler } from 'application/use-cases/catalog/product/queries/get-product-sizes.query/handler/get-product-sizes.handler';
import { GetProductsQueryHandler } from 'application/use-cases/catalog/product/queries/get-products.query/handler/get-products.handler';
import { GetPicturesByTypeHandler } from 'application/use-cases/common/pictures/queries/get-pictures-by-type.query/handler/get-pictures-by-type.handler';
import { GetBasketByIdHandler } from 'application/use-cases/customer/basket/queries/get-basket-by-id.query/handler/get-basket-by-id.handler';
import { GetDeliveryMethodsHandler } from 'application/use-cases/customer/order/queries/get-delivery-methods.query/handler/get-delivery-methods.handler';
import { GetOrdersHandler } from 'application/use-cases/customer/order/queries/get-orders.query/handler/get-orders.handler';
import { GetSeenProductListHandler } from 'application/use-cases/customer/seen-product/queries/get-seen-product-list.query/handler/get-seen-product-list.handler';
import { GetWishlistByIdHandler } from 'application/use-cases/customer/wishlist/queries/get-wishlist-by-id.query/handler/get-wishlist-by-id.handler';
import { CheckEmailExistsHandler } from 'application/use-cases/identity/user/queries/check-email-exists.query/handler/check-email-exists.handler';
import { GetAddressHandler } from 'application/use-cases/identity/user/queries/get-address.query/handler/get-address.handler';
import { GetLatestReviewsHandler } from 'application/use-cases/identity/user/queries/get-latest-reviews.query/handler/get-latest-reviews.handler';
import { GetProductReviewsHandler } from 'application/use-cases/identity/user/queries/get-product-reviews.query/handler/get-proudct-reviews.handler';
import { GetUserReviewsHandler } from 'application/use-cases/identity/user/queries/get-user-reviews.query/handler/get-user-reviews.handler';
import { GetUserHandler } from 'application/use-cases/identity/user/queries/get-user.query/handler/get-user.handler';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    GetProductsQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    GetWishlistByIdHandler,
    GetProductBrandsHandler,
    GetProductTypesHandler,
    GetPicturesByTypeHandler,
    GetSeenProductListHandler,
    CheckEmailExistsHandler,
    GetUserHandler,
    GetLatestReviewsHandler,
    GetAddressHandler,
    GetProductReviewsHandler,
    GetProductTypeByCategoryHandler,
    GetProductTypeByIdHandler,
    GetProductColorsHandler,
    GetProductSizesHandler,
    GetProductAttributesHandler,
    GetDeliveryMethodsHandler,
    GetOrdersHandler,
    GetUserReviewsHandler,
  ],
  exports: [
    GetProductsQueryHandler,
    GetCategoriesQueryHandler,
    GetBasketByIdHandler,
    GetWishlistByIdHandler,
    GetProductBrandsHandler,
    GetProductTypesHandler,
    GetPicturesByTypeHandler,
    GetSeenProductListHandler,
    CheckEmailExistsHandler,
    GetUserHandler,
    GetLatestReviewsHandler,
    GetAddressHandler,
    GetProductReviewsHandler,
    GetProductTypeByCategoryHandler,
    GetProductTypeByIdHandler,
    GetProductColorsHandler,
    GetProductSizesHandler,
    GetProductAttributesHandler,
    GetDeliveryMethodsHandler,
    GetOrdersHandler,
    GetUserReviewsHandler,
  ],
})
export class QueryHandlerModule {}
