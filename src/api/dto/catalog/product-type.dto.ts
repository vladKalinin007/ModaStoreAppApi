import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, CategoryProductTypeDto } from '..';
import { ProductTypeModel } from 'domain/models/catalog/product-type.model';

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

  static fromModel(model: ProductTypeModel): ProductTypeDto {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
    } as ProductTypeDto;
  }
}
