import { BaseEntity } from '../basic/base-entity.entity';

export class SeenProduct extends BaseEntity {
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productTypeId: string;
  productBrand: string;
  productBrandId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    pictureUrl: string,
    productType: string,
    productTypeId: string,
    productBrand: string,
    productBrandId: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.productType = productType;
    this.productTypeId = productTypeId;
    this.productBrand = productBrand;
    this.productBrandId = productBrandId;
  }
}
