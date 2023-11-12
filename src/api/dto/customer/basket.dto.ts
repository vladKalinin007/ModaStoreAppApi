import { ApiProperty } from '@nestjs/swagger';
import { Basket } from '../../../domain/models/customer/basket.model';
import { BasketItemDto } from './basket-item.dto';

export class BasketDto {
  @ApiProperty({
    default: 'bd1f43a6-a013-4ff9-81a7-477130fa679b',
    type: String,
  })
  id?: string | null = null;

  @ApiProperty({ required: true, type: [BasketItemDto] })
  items: BasketItemDto[] = [];

  @ApiProperty({
    default: 'e9712d1a-7e62-11ee-b962-0242ac120002',
    type: String,
  })
  deliveryMethodId?: string | null = null;

  @ApiProperty({ default: null, type: String })
  clientSecret?: string | null = null;

  @ApiProperty({ default: null, type: String })
  paymentIntentId?: string | null = null;

  @ApiProperty({ default: 50, type: Number })
  shippingPrice?: number | null = null;

  constructor(id?: string) {
    this.id = id;
  }

  static toModel(basketDto: BasketDto): Basket {
    return {
      id: basketDto.id || null,
      items: basketDto.items.map((item) => BasketItemDto.toModel(item)),
      deliveryMethodId: basketDto.deliveryMethodId || null,
      clientSecret: basketDto.clientSecret || null,
      paymentIntentId: basketDto.paymentIntentId || null,
      shippingPrice: basketDto.shippingPrice || null,
    };
  }

  static fromModel(basket: Basket): BasketDto {
    return {
      id: basket.id || null,
      items: basket.items.map((item) => BasketItemDto.fromModel(item)),
      deliveryMethodId: basket.deliveryMethodId || null,
      clientSecret: basket.clientSecret || null,
      paymentIntentId: basket.paymentIntentId || null,
      shippingPrice: basket.shippingPrice || null,
    };
  }
}
