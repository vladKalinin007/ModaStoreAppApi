import { WishlistItem } from '../../../domain/models/customer/wishlist-item.model';

export class WishlistItemDto {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  price: number;
  ProductType: string;
  ProductBrand: string;

  static toModel(wishlistItemDto: WishlistItemDto): WishlistItem {
    return {
      id: wishlistItemDto.id,
      name: wishlistItemDto.name,
      description: wishlistItemDto.description,
      pictureUrl: wishlistItemDto.pictureUrl,
      price: wishlistItemDto.price,
      ProductType: wishlistItemDto.ProductType,
      ProductBrand: wishlistItemDto.ProductBrand,
    } as WishlistItem;
  }

  static fromModel(wishlistItem: WishlistItem): WishlistItemDto {
    return {
      id: wishlistItem.id,
      name: wishlistItem.name,
      description: wishlistItem.description,
      pictureUrl: wishlistItem.pictureUrl,
      price: wishlistItem.price,
      ProductType: wishlistItem.ProductType,
      ProductBrand: wishlistItem.ProductBrand,
    } as WishlistItemDto;
  }
}
