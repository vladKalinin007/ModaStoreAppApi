import { Module } from '@nestjs/common';
import { ProductService } from './services/catalog/product.service';
import { CategoryService } from './services/catalog/category.service';
import { PrismaService } from './database/prisma.service';
import { BasketService } from './services/customer/basket.service';
import { WishlistService } from './services/customer/wishlist.service';
import { AuthService } from './services/identity/auth.service';
import { DeliveryService } from './services/customer/delivery.service';
import { ProductBrandSerivce } from './services/catalog/product-brand.service';
import { ProductTypeService } from './services/catalog/product-type.service';
import { PictureService } from './services/common/picture.service';
import { PaymentService } from './services/customer/payment.service';
import { ConfigService } from '@nestjs/config';
import { SeenProductService } from './services/customer/seen-product.service';
import { AddressService } from './services/customer/address.service';
import { ReviewService } from './services/customer/review.service';
import { UserService } from './services/identity/user.service';
import { CurrentUserService } from './services/identity/current-user.service';
import { AsyncLocalStorageService } from './services/storage/als.service';
import { AsyncLocalStorage } from 'async_hooks';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SessionSerializer } from './serializers/session.serializer';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionStore } from './services/identity/session.store';
import { OrderService } from './services/customer/order.service';
import { ProductAttributesService } from './services/catalog/product-attributes.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
    PassportModule.register({ session: true }),
  ],
  providers: [
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
    SeenProductService,
    AddressService,
    ReviewService,
    UserService,
    CurrentUserService,
    AsyncLocalStorageService,
    AsyncLocalStorage,
    AuthService,
    LocalStrategy,
    SessionSerializer,
    JwtService,
    JwtStrategy,
    SessionStore,
    OrderService,
    ProductAttributesService,
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
    SeenProductService,
    AddressService,
    ReviewService,
    UserService,
    CurrentUserService,
    AsyncLocalStorageService,
    AsyncLocalStorage,
    AuthService,
    LocalStrategy,
    SessionSerializer,
    JwtService,
    JwtStrategy,
    SessionStore,
    OrderService,
    ProductAttributesService,
  ],
})
export class InfrastructureModule {}
