import { Wishlist } from '../../../domain/models/customer/wishlist.model';
import { WishlistItemDto } from './wishlist-item.dto';

export class WishlistDto {
  id: string | null = null;
  wishlistItems: WishlistItemDto[] = [];

  constructor(id?: string, wishlist?: WishlistDto) {
    this.id = id;
    this.wishlistItems = wishlist?.wishlistItems || [];
  }

  static toModel(wishlistDto: WishlistDto): Wishlist {
    return {
      id: wishlistDto.id,
      wishlistItems: wishlistDto.wishlistItems.map((item) =>
        WishlistItemDto.toModel(item),
      ),
    } as Wishlist;
  }

  static fromModel(wishlist: Wishlist): WishlistDto {
    return {
      id: wishlist.id,
      wishlistItems: wishlist.wishlistItems.map((item) =>
        WishlistItemDto.fromModel(item),
      ),
    } as WishlistDto;
  }
}
