import { Injectable } from '@nestjs/common';
import { BasketService } from './basket.service';
import { PaymentService } from './payment.service';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { OrderModel } from 'domain/models/customer/order.model';
import { OrderItemModel } from 'domain/models/customer/order-item.model';
import { UserService } from '../identity/user.service';
import { v4 as uuid } from 'uuid';
import { OrderStatus } from 'domain/enums/customer/order-status.enum';
import { AddressService } from './address.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly _basketService: BasketService,
    private readonly _paymentService: PaymentService,
    private readonly _prismaService: PrismaService,
    private readonly _userService: UserService,
    private readonly _addressService: AddressService,
  ) {}

  async getOrders() {
    return this._prismaService.order.findMany({
      include: {
        orderItems: true,
        deliveryMethod: true,
      },
    });
  }

  async getOrderById(id: string) {
    return this._prismaService.order.findUnique({
      where: {
        id,
      },
      include: {
        orderItems: true,
        deliveryMethod: true,
      },
    });
  }

  async createOrder(basketId: string) {
    const basket = await this._basketService.getBasket(basketId);

    const items: OrderItemModel[] = basket.items.map((item) => {
      return new OrderItemModel(
        item.id,
        item.productName,
        item.pictureUrl,
        item.price,
        item.quantity,
      );
    });

    const buyerEmail: string = (await this._userService.getCurrentUser()).email;

    const deliveryMethodId: string = basket.deliveryMethodId;

    const shipToAddressId: string = (
      await this._addressService.getUserAddress()
    ).id;

    const paymentIntentId: string = (
      await this._paymentService.createOrUpdatePaymentIntent(basketId)
    ).paymentIntentId;

    const subtotal: number = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return (await this._prismaService.order.create({
      data: {
        id: uuid(),
        buyerEmail: buyerEmail,
        orderDate: new Date(),
        subtotal: subtotal,
        status: OrderStatus.Pending,
        paymentIntentId: paymentIntentId,
        shipToAddressId: shipToAddressId,
        deliveryMethodId: deliveryMethodId,
        orderItems: {
          create: items,
        },
      },
    })) as OrderModel;
  }

  async updateOrder(order: OrderModel) {
    return this._prismaService.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: order.status,
      },
    });
  }

  async deleteOrder(id: string) {
    return this._prismaService.order.delete({
      where: {
        id,
      },
    });
  }
}
