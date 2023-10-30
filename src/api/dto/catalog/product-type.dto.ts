import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, CategoryProductTypeDto } from '..';

export class ProductTypeDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  products: ProductDto[];

  @ApiProperty({ required: true, type: () => CategoryProductTypeDto })
  @IsOptional()
  categoryProductTypes: CategoryProductTypeDto[];
}
