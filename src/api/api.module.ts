import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';

import { ProductController } from './controllers/product.controller';
import { CategoryController } from './controllers/category.controller';
import { BasketController } from './controllers/basket.controller';
import { WishlistController } from './controllers/wishlist.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [
    ProductController,
    CategoryController,
    BasketController,
    WishlistController,
  ],
})
export class ApiModule {}
