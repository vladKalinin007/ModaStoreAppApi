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
}
