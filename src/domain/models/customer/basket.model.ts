import { BaseEntity } from '../basic/base-entity.entity';
import { BasketItem } from './basket-item.model';

export class Basket extends BaseEntity {
  items: BasketItem[] = [];
  deliveryMethodId?: string;
  clientSecret?: string;
  paymentIntentId?: string;
  shippingPrice?: number;
}
