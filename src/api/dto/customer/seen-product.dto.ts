import { ApiProperty } from '@nestjs/swagger';
import { SeenProduct } from 'domain/models/customer/seen-product.model';

export class SeenProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  pictureUrl: string;

  @ApiProperty()
  productType: string;

  @ApiProperty()
  productTypeId: string;

  @ApiProperty()
  productBrand: string;

  @ApiProperty()
  productBrandId: string;

  constructor(seenProduct: SeenProduct) {
    this.id = seenProduct.id;
    this.name = seenProduct.name;
    this.description = seenProduct.description;
    this.price = seenProduct.price;
    this.pictureUrl = seenProduct.pictureUrl;
    this.productType = seenProduct.productType;
    this.productTypeId = seenProduct.productTypeId;
    this.productBrand = seenProduct.productBrand;
    this.productBrandId = seenProduct.productBrandId;
  }

  toModel() {
    return new SeenProduct(
      this.id,
      this.name,
      this.description,
      this.price,
      this.pictureUrl,
      this.productType,
      this.productTypeId,
      this.productBrand,
      this.productBrandId,
    );
  }

  static from(seenProduct: SeenProduct) {
    return new SeenProductDto(seenProduct);
  }
}
