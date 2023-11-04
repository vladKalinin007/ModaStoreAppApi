import { Module } from '@nestjs/common';
import { ProductService } from './services/catalog/product.service';
import { CategoryService } from './services/catalog/category.service';
import { PrismaService } from './database/prisma.service';
import { BasketService } from './services/customer/basket.service';
import { WishlistService } from './services/customer/wishlist.service';
import { AuthService } from './services/identity/auth.service';
import { DeliveryService } from './services/customer/delivery.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    ProductService,
    CategoryService,
    BasketService,
    WishlistService,
    DeliveryService,
    AuthService,
  ],
  exports: [
    ProductService,
    CategoryService,
    PrismaService,
    BasketService,
    WishlistService,
    DeliveryService,
    AuthService,
  ],
})
export class InfrastructureModule {}
