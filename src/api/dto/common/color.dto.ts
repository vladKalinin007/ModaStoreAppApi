import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductColorsDto } from '..';
import { ProductColorsModel } from 'src/domain/models/catalog/product-colors.model';

export class ColorDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  colorCode: string;

  @ApiProperty({ required: true, type: () => ProductColorsDto })
  @IsOptional()
  productColors: ProductColorsDto[];

  constructor(color: ProductColorsModel) {
    this.id = color.colorId;
    this.name = color.color.name;
    this.colorCode = color.color.colorCode;
  }
}
