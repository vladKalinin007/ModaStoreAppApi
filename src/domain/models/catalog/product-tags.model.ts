import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';
import { TagModel } from '../common/tag.model';

export class ProductTagsModel {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  tagId: string;

  @IsOptional()
  product: ProductModel;

  @IsOptional()
  tag: TagModel;
}
