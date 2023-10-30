import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, SizeDto } from '..';

export class ProductSizesDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  sizeId: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  product: ProductDto;

  @ApiProperty({ required: true, type: () => SizeDto })
  @IsOptional()
  size: SizeDto;
}
