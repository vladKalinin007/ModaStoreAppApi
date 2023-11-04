import { Injectable } from '@nestjs/common';
import { BasketService } from './basket.service';
import { DeliveryService } from './delivery.service';
import { PaymentService } from './payment.service';
import { AddressModel } from 'domain/models/customer/address.model';
import { OrderItemModel } from 'domain/models/customer/order-item.model';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { OrderModel } from 'domain/models/customer/order.model';

@Injectable()
export class OrderService {
  constructor(
    private readonly _basketService: BasketService,
    private readonly _deliveryService: DeliveryService,
    private readonly _paymentService: PaymentService,
    private readonly _prismaService: PrismaService,
  ) {}

  async getOrders() {
    return this._prismaService.order.findMany();
  }

  async getOrderById(id: string) {
    return this._prismaService.order.findUnique({
      where: {
        id,
      },
    });
  }

  async createOrder(
    buyerEmail: string,
    basketId: string,
    deliveryMethodId: number,
    shipToAddress: AddressModel,
  ) {
    const basket = await this._basketService.getBasket(basketId);

    const items = new Array<OrderItemModel>();

    for (const item of basket.items) {
      const productItem = await this._basketService.getProduct(item.productId);

      const itemOrdered = new OrderItem(
        productItem.id,
        productItem.name,
        productItem.pictureUrl,
        item.price,
        item.quantity,
      );

      items.push(itemOrdered);
    }

    const deliveryMethod =
      await this._deliveryService.getDeliveryMethods(deliveryMethodId);

    const subtotal = items.reduce((item) => item.price * item.quantity);

    return order;
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
