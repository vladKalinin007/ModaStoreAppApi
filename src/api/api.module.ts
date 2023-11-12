import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';

import { ProductController } from './controllers/product.controller';
import { CategoryController } from './controllers/category.controller';
import { BasketController } from './controllers/basket.controller';
import { WishlistController } from './controllers/wishlist.controller';
import { AuthController } from './controllers/auth.controller';
import { PaymentController } from './controllers/payment.controller';
import { PictureController } from './controllers/pictures.controller';
import { UserController } from './controllers/user.controller';
import { OrderController } from './controllers/order.controller';
import { ProductTypeController } from './controllers/product-type.controller';
import { ProductBrandController } from './controllers/product-brand.controller';
import { SeenProductController } from './controllers/seen-product.controller';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/all-exeptions.filter';
import { ProductReviewController } from './controllers/product-review.controller';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [
    ProductController,
    CategoryController,
    BasketController,
    WishlistController,
    AuthController,
    PaymentController,
    PictureController,
    UserController,
    OrderController,
    ProductTypeController,
    ProductBrandController,
    SeenProductController,
    ProductReviewController,
  ],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class ApiModule {}
