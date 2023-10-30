import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { CategoryModel } from './category.model';
import { ProductTypeModel } from './product-type.model';

export class CategoryProductTypeModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  productTypeId?: string;

  @IsOptional()
  category?: CategoryModel;

  @IsOptional()
  productType?: ProductTypeModel;
}
