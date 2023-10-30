import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ProductDto, CategoryProductTypeDto } from '..';
import { CategoryModel } from 'src/domain/models/catalog/category.model';

export class CategoryDto {
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
  pictureUrl?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  showOnHomePage: boolean;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  products: ProductDto[];

  @ApiProperty({ required: true, type: () => CategoryProductTypeDto })
  @IsOptional()
  categoryProductTypes: CategoryProductTypeDto[];

  static from(dto: CategoryModel): CategoryDto {
    const categoryDto = new CategoryDto();
    categoryDto.id = dto.id;
    categoryDto.name = dto.name;
    categoryDto.pictureUrl = dto.pictureUrl;
    categoryDto.showOnHomePage = dto.showOnHomePage;
    return categoryDto;
  }
}
