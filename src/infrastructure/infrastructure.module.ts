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
import { ProductTypeService } from './services/catalog/product-type.service';
import { PictureService } from './services/common/picture.service';
import { PaymentService } from './services/customer/payment.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  providers: [
    JwtService,
    ConfigService,
    PrismaService,
    ProductService,
    CategoryService,
    BasketService,
    WishlistService,
    DeliveryService,
    AuthService,
    ProductBrandSerivce,
    ProductTypeService,
    PictureService,
    PaymentService,
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
    ProductTypeService,
    PictureService,
    PaymentService,
  ],
})
export class InfrastructureModule {}
