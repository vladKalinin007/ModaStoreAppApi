import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductTagsModel } from '../catalog/product-tags.model';

export class TagModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  productTags: ProductTagsModel[];
}
