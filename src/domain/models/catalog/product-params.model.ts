import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  IsBoolean,
  IsDecimal,
} from 'class-validator';

export class ProductParams {
  @ApiPropertyOptional({ description: 'Product ID' })
  @IsOptional()
  @IsString()
  id: string;

  @ApiPropertyOptional({ description: 'Page index' })
  @IsOptional()
  @IsInt()
  @Min(1)
  pageIndex?: number = 1;

  @ApiPropertyOptional({ description: 'Page size' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  pageSize?: number = 9;

  @ApiPropertyOptional({ description: 'Brand ID' })
  @IsOptional()
  @IsString()
  brandId?: string;

  @ApiPropertyOptional({ description: 'Type ID' })
  @IsOptional()
  @IsString()
  typeId?: string;

  @ApiPropertyOptional({ description: 'Category ID' })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiPropertyOptional({ description: 'Category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Sort' })
  @IsOptional()
  @IsString()
  sort?: string;

  @ApiPropertyOptional({ description: 'Color ID' })
  @IsOptional()
  @IsString()
  colorId?: string;

  @ApiPropertyOptional({ description: 'Size ID' })
  @IsOptional()
  @IsString()
  sizeId?: string;

  @ApiPropertyOptional({ description: 'Material' })
  @IsOptional()
  @IsString()
  material?: string;

  @ApiPropertyOptional({ description: 'Style' })
  @IsOptional()
  @IsString()
  style?: string;

  @ApiPropertyOptional({ description: 'Pattern' })
  @IsOptional()
  @IsString()
  pattern?: string;

  @ApiPropertyOptional({ description: 'Season' })
  @IsOptional()
  @IsString()
  season?: string;

  @ApiPropertyOptional({ description: 'Is Best Seller' })
  @IsOptional()
  @IsBoolean()
  isBestSeller?: boolean;

  @ApiPropertyOptional({ description: 'Is New' })
  @IsOptional()
  @IsBoolean()
  isNew?: boolean;

  @ApiPropertyOptional({ description: 'Is On Sale' })
  @IsOptional()
  @IsBoolean()
  isOnSale?: boolean;

  @ApiPropertyOptional({ description: 'Minimum Price' })
  @IsOptional()
  @IsDecimal()
  minPrice?: number;

  @ApiPropertyOptional({ description: 'Maximum Price' })
  @IsOptional()
  @IsDecimal()
  maxPrice?: number;

  @ApiPropertyOptional({ description: 'Search query' })
  @IsOptional()
  @IsString()
  search?: string;
}
