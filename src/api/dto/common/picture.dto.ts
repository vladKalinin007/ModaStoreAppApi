import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductPicturesDto } from '..';
import { PictureModel } from 'domain/models/common/picture.model';

export class PictureDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  pictureType: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  pictureTypeId: string;

  @ApiProperty({ required: true, type: () => ProductPicturesDto })
  @IsOptional()
  productPictures: ProductPicturesDto[];

  constructor(picture: PictureModel) {
    this.id = picture.id;
    this.url = picture.url;
    this.pictureType = picture.pictureType;
    this.pictureTypeId = picture.pictureTypeId;
  }

  static fromModel(picture: PictureModel): PictureDto {
    return new PictureDto(picture);
  }
}
