import { BaseEntity } from '../basic/base-entity.entity';
import { SeenProduct } from './seen-product.model';

export class SeenProductList extends BaseEntity {
  constructor() {
    super();
    this.seenProducts = [];
  }

  seenProducts: SeenProduct[];
}
