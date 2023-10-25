import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, ColorDto } from './';

export class ProductColorsDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  colorId: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  product: ProductDto;

  @ApiProperty({ required: true, type: () => ColorDto })
  @IsOptional()
  color: ColorDto;
}
