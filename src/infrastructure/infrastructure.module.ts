import { Module } from '@nestjs/common';
import { ProductService } from './services/catalog/product.service';
import { CategoryService } from './services/catalog/category.service';
import { PrismaService } from './database/prisma.service';
import { BasketService } from './services/customer/basket.service';
import { WishlistService } from './services/customer/wishlist.service';
import { AuthService } from './services/identity/auth.service';
import { DeliveryService } from './services/customer/delivery.service';
import { ProductBrandSerivce } from './services/catalog/product-brand.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [
    JwtService,
    PrismaService,
    ProductService,
    CategoryService,
    BasketService,
    WishlistService,
    DeliveryService,
    AuthService,
    ProductBrandSerivce,
  ],
  exports: [
    ProductService,
    CategoryService,
    PrismaService,
    BasketService,
    WishlistService,
    DeliveryService,
    AuthService,
    ProductBrandSerivce,
  ],
})
export class InfrastructureModule {}
