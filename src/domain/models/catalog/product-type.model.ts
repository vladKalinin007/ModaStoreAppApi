import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';
import { CategoryProductTypeModel } from './category-product-type.model';

export class ProductTypeModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  products: ProductModel[];

  @IsOptional()
  categoryProductTypes: CategoryProductTypeModel[];
}
