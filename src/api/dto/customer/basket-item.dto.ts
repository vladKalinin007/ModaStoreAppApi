import { ApiProperty } from '@nestjs/swagger';
import { BasketItem } from '../../../domain/models/customer/basket-item.model';

export class BasketItemDto {
  @ApiProperty({
    default: 'bd1f43a6-a013-4ff9-81a7-477130fa679b',
    type: String,
  })
  id: string;

  @ApiProperty({ default: 'Test product', type: String })
  productName: string;

  @ApiProperty({ default: 50, type: Number })
  price: number;

  @ApiProperty({ default: 2, type: Number })
  quantity: number;

  @ApiProperty({ default: 'www.example.com/picture', type: String })
  pictureUrl: string;

  @ApiProperty({ default: 'Test brand', type: String })
  brand: string;

  @ApiProperty({ default: 'Test type', type: String })
  type: string;

  static toModel(basketItemDto: BasketItemDto): BasketItem {
    return {
      id: basketItemDto.id,
      productName: basketItemDto.productName,
      price: basketItemDto.price,
      quantity: basketItemDto.quantity,
      pictureUrl: basketItemDto.pictureUrl,
      brand: basketItemDto.brand,
      type: basketItemDto.type,
    };
  }

  static fromModel(basketItem: BasketItem): BasketItemDto {
    return {
      id: basketItem.id,
      productName: basketItem.productName,
      price: basketItem.price,
      quantity: basketItem.quantity,
      pictureUrl: basketItem.pictureUrl,
      brand: basketItem.brand,
      type: basketItem.type,
    };
  }
}
