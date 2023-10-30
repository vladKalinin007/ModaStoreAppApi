import { BasketItem } from '../../../domain/models/customer/basket-item.model';

export class BasketItemDto {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;

  toModel(): BasketItem {
    const basketItem = new BasketItem();
    basketItem.id = this.id;
    basketItem.productName = this.productName;
    basketItem.price = this.price;
    basketItem.quantity = this.quantity;
    basketItem.pictureUrl = this.pictureUrl;
    basketItem.brand = this.brand;
    basketItem.type = this.type;
    return basketItem;
  }

  static fromModel(basketItem: BasketItem): BasketItemDto {
    const basketItemDto = new BasketItemDto();
    basketItemDto.id = basketItem.id;
    basketItemDto.productName = basketItem.productName;
    basketItemDto.price = basketItem.price;
    basketItemDto.quantity = basketItem.quantity;
    basketItemDto.pictureUrl = basketItem.pictureUrl;
    basketItemDto.brand = basketItem.brand;
    basketItemDto.type = basketItem.type;
    return basketItemDto;
  }
}
