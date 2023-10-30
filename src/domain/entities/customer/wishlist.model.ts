import { BaseEntity } from '../basic/base-entity.entity';
import { WishlistItem } from './wishlist-item.model';

export class Wishlist extends BaseEntity {
  constructor() {
    super();
  }

  wishlistItems: WishlistItem[];
}
