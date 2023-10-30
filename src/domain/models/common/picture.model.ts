import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductPicturesModel } from '../../../../prisma/generated/models';

export class PictureModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  pictureType: string;

  @IsNotEmpty()
  @IsString()
  pictureTypeId: string;

  @IsOptional()
  productPictures: ProductPicturesModel[];
}
