import { BaseEntity } from '../basic/base-entity.entity';

export class BasketItem extends BaseEntity {
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
  isBestSeller: boolean;
  isNew: boolean;
  oldPrice: number;
}
