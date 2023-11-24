import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateBasketHandler } from 'application/use-cases/customer/basket/commands/create-basket.command/handler/create-basket.handler';
import { DeleteBasketHandler } from 'application/use-cases/customer/basket/commands/delete-basket.command/handler/delete-basket.handler';
import { UpdateBasketHandler } from 'application/use-cases/customer/basket/commands/update-basket.command/handler/update-basket.handler';
import { CreateOrderHandler } from 'application/use-cases/customer/order/commands/create-order.command/handler/create-order.handler';
import { CreateOrUpdatePaymentIntentHandler } from 'application/use-cases/customer/payment/commands/create-or-update-payment-intent.command/handler/create-or-update-payment-intent.handler';
import { CreateSeenProductHandler } from 'application/use-cases/customer/seen-product/command/create-seen-product.command/handler/create-seen-product.handler';
import { DeleteSeenProductHandler } from 'application/use-cases/customer/seen-product/command/delete-seen-product.command/handler/delete-seen-product.handler';
import { UpdateSeenProductHandler } from 'application/use-cases/customer/seen-product/command/update-seen-product.command/handler/update-seen-product.handler';
import { CreateWishlistHandler } from 'application/use-cases/customer/wishlist/commands/create-wishlist.command/handler/create-wishlist.handler';
import { UpdateWishlistHandler } from 'application/use-cases/customer/wishlist/commands/update-wishlist.command/handler/update-wishlist.handler';
import { LoginHandler } from 'application/use-cases/identity/authentication/commands/login.command/handler/login.handler';
import { LogoutHandler } from 'application/use-cases/identity/authentication/commands/logout.command/handler/logout.handler';
import { RegisterHandler } from 'application/use-cases/identity/authentication/commands/register.command/handler/register.handler';
import { AddReviewHandler } from 'application/use-cases/identity/user/commands/add-review.command/handler/add-review.handler';
import { UpdateAddressHandler } from 'application/use-cases/identity/user/commands/update-address.command/handler/update-address.handler';
import { UpdateUserHandler } from 'application/use-cases/identity/user/commands/update-user.command/handler/update-user.handler';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
    CreateWishlistHandler,
    UpdateWishlistHandler,
    // DeleteWishlistHandler,
    LoginHandler,
    LogoutHandler,
    RegisterHandler,
    CreateOrUpdatePaymentIntentHandler,
    CreateSeenProductHandler,
    UpdateSeenProductHandler,
    DeleteSeenProductHandler,
    CreateOrderHandler,
    UpdateAddressHandler,
    UpdateUserHandler,
    AddReviewHandler,
  ],
  exports: [
    CreateBasketHandler,
    UpdateBasketHandler,
    DeleteBasketHandler,
    CreateWishlistHandler,
    UpdateWishlistHandler,
    // DeleteWishlistHandler,
    LoginHandler,
    LogoutHandler,
    RegisterHandler,
    CreateOrUpdatePaymentIntentHandler,
    CreateSeenProductHandler,
    UpdateSeenProductHandler,
    DeleteSeenProductHandler,
    CreateOrderHandler,
    UpdateAddressHandler,
    UpdateUserHandler,
    AddReviewHandler,
  ],
})
export class CommandHandlerModule {}
