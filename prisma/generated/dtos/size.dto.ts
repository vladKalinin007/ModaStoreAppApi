import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductSizesDto } from './';
import { ProductSizesModel } from '../models/productsizes.model';

export class SizeDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, type: () => ProductSizesDto })
  @IsOptional()
  productSizes: ProductSizesDto[];

  constructor(size: ProductSizesModel) {
    this.id = size.sizeId;
    this.name = size.size.name;
  }
}
