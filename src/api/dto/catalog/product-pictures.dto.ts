import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, PictureDto } from '..';

export class ProductPicturesDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  pictureId: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  product: ProductDto;

  @ApiProperty({ required: true, type: () => PictureDto })
  @IsOptional()
  picture: PictureDto;
}
