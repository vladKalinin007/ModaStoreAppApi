import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto } from '..';
import { ProductBrandModel } from 'domain/models/catalog/product-brand.model';

export class ProductBrandDto {
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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  products: ProductDto[];

  constructor(
    id: string,
    name: string,
    description: string,
    pictureUrl: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.pictureUrl = pictureUrl;
  }

  static fromModel(model: ProductBrandModel) {
    return new ProductBrandDto(
      model.id,
      model.name,
      model.description,
      model.pictureUrl,
    );
  }
}
