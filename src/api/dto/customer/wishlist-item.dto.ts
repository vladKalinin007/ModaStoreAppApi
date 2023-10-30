import { WishlistItem } from '../../../domain/models/customer/wishlist-item.model';

export class WishlistItemDto {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  price: number;
  ProductType: string;
  ProductBrand: string;

  toModel(): WishlistItem {
    const wishlistItem = new WishlistItem();
    wishlistItem.id = this.id;
    wishlistItem.name = this.name;
    wishlistItem.description = this.description;
    wishlistItem.pictureUrl = this.pictureUrl;
    wishlistItem.price = this.price;
    wishlistItem.ProductType = this.ProductType;
    wishlistItem.ProductBrand = this.ProductBrand;
    return wishlistItem;
  }

  static fromModel(wishlistItem: WishlistItem): WishlistItemDto {
    const wishlistItemDto = new WishlistItemDto();
    wishlistItemDto.id = wishlistItem.id;
    wishlistItemDto.name = wishlistItem.name;
    wishlistItemDto.description = wishlistItem.description;
    wishlistItemDto.pictureUrl = wishlistItem.pictureUrl;
    wishlistItemDto.price = wishlistItem.price;
    wishlistItemDto.ProductType = wishlistItem.ProductType;
    wishlistItemDto.ProductBrand = wishlistItem.ProductBrand;
    return wishlistItemDto;
  }
}
