import { Basket } from '../../../domain/models/customer/basket.model';
import { BasketItemDto } from './basket-item.dto';

export class BasketDto {
  id?: string | null = null;
  items: BasketItemDto[] = [];
  deliveryMethodId?: string | null = null;
  clientSecret?: string | null = null;
  paymentIntentId?: string | null = null;
  shippingPrice?: number | null = null;

  constructor(id?: string) {
    this.id = id;
  }

  toModel(id?: string): Basket {
    const basket = new Basket();
    basket.id = id || this.id;
    basket.items = this.items.map((item) => item.toModel());
    basket.deliveryMethodId = this.deliveryMethodId;
    basket.clientSecret = this.clientSecret;
    basket.paymentIntentId = this.paymentIntentId;
    basket.shippingPrice = this.shippingPrice;
    return basket;
  }

  static fromModel(basket: Basket): BasketDto {
    const basketDto = new BasketDto();
    if (basket !== null) {
      basketDto.id = basket.id;
      basketDto.items = basket.items.map((item) =>
        BasketItemDto.fromModel(item),
      );
      basketDto.deliveryMethodId = basket.deliveryMethodId;
      basketDto.clientSecret = basket.clientSecret;
      basketDto.paymentIntentId = basket.paymentIntentId;
      basketDto.shippingPrice = basket.shippingPrice;
    }
    return basketDto;
  }
}
