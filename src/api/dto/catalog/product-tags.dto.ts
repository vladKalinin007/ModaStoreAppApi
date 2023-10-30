import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductDto, TagDto } from '..';

export class ProductTagsDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  tagId: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  product: ProductDto;

  @ApiProperty({ required: true, type: () => TagDto })
  @IsOptional()
  tag: TagDto;
}
