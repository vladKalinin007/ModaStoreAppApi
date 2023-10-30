import { Wishlist } from '../../../domain/models/customer/wishlist.model';
import { WishlistItemDto } from './wishlist-item.dto';

export class WishlistDto {
  id: string | null = null;
  wishlistItems: WishlistItemDto[] = [];

  constructor(id?: string, wishlist?: WishlistDto) {
    this.id = id;
    this.wishlistItems = wishlist?.wishlistItems || [];
  }

  toModel(id?: string): Wishlist {
    const wishlist = new Wishlist();
    wishlist.id = id || this.id;
    wishlist.wishlistItems = this.wishlistItems.map((item) => item.toModel());
    return wishlist;
  }

  static fromModel(wishlist: Wishlist): WishlistDto {
    const wishlistDto = new WishlistDto();
    if (wishlist !== null) {
      wishlistDto.id = wishlist.id;
      wishlistDto.wishlistItems = wishlist.wishlistItems.map((item) =>
        WishlistItemDto.fromModel(item),
      );
    }
    return wishlistDto;
  }
}
