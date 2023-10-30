import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';
import { PictureModel } from '../common/picture.model';

export class ProductPicturesModel {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  pictureId: string;

  @IsOptional()
  product: ProductModel;

  @IsOptional()
  picture: PictureModel;
}
