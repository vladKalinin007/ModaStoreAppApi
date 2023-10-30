import { BaseEntity } from '../basic/base-entity.entity';

export class WishlistItem extends BaseEntity {
  name: string;
  description: string;
  pictureUrl: string;
  price: number;
  ProductType: string;
  ProductBrand: string;
}
