import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';
import { BaseEntity } from '../basic/base-entity.entity';
import { SeenProduct } from './seen-product.model';

export class SeenProductList extends BaseEntity {
  constructor(id: string, seenProducts: SeenProduct[]) {
    super();
    this.id = id;
    this.seenProducts = seenProducts;
  }

  static from(seenProductList: SeenProductList) {
    return new SeenProductListDto(seenProductList);
  }

  seenProducts: SeenProduct[] = [];
}
