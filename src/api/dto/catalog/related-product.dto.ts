import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ProductDto } from '..';

export class RelatedProductDto {
  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  productA: ProductDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productAId: string;

  @ApiProperty({ required: true, type: () => ProductDto })
  @IsOptional()
  productB: ProductDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  productBId: string;
}
