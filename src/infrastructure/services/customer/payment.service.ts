import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { BasketService } from './basket.service';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _basketService: BasketService,
    private readonly _configService: ConfigService,
  ) {}

  async createOrUpdatePaymentIntent(basketId: string) {
    const stripe = new Stripe(
      this._configService.get<string>('STRIPE_SECRET_KEY'),
      {
        apiVersion: '2023-10-16',
      },
    );

    const basket = await this._basketService.getBasket(basketId);

    if (!basket) return null;

    let shippingPrice = 0;

    if (basket.deliveryMethodId) {
      const deliveryMethod =
        await this._prismaService.deliveryMethod.findUnique({
          where: { id: basket.deliveryMethodId },
        });
      shippingPrice = deliveryMethod.price;
    }

    for (const item of basket.items) {
      const productItem = await this._prismaService.product.findUnique({
        where: { id: item.id },
      });

      if (item.price !== productItem.price) {
        item.price = productItem.price;
      }
    }

    let intent;

    if (!basket.paymentIntentId) {
      const options = {
        amount:
          basket.items.reduce((acc, i) => acc + i.quantity * i.price * 100, 0) +
          shippingPrice * 100,
        currency: 'usd',
        payment_method_types: ['card'],
      };

      intent = await stripe.paymentIntents.create(options);
      basket.paymentIntentId = intent.id;
      basket.clientSecret = intent.client_secret;
    } else {
      const options = {
        amount:
          basket.items.reduce((acc, i) => acc + i.quantity * i.price * 100, 0) +
          shippingPrice * 100,
      };
      await stripe.paymentIntents.update(basket.paymentIntentId, options);
    }

    await this._basketService.updateBasket(basket);

    return basket;
  }
}
