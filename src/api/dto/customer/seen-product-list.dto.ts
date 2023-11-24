import { SeenProductList } from 'domain/models/customer/seen-product-list.model';
import { ApiProperty } from '@nestjs/swagger';

export class SeenProductListDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  seenProductsIds: string[];

  static toModel(seenProductListDto: SeenProductListDto): SeenProductList {
    return {
      id: seenProductListDto.id,
      seenProductsIds: seenProductListDto.seenProductsIds.map((id) => id),
    } as SeenProductList;
  }

  static fromModel(seenProductList: SeenProductList): SeenProductListDto {
    return {
      id: seenProductList.id,
      seenProductsIds: seenProductList.seenProductsIds.map((id) => id),
    } as SeenProductListDto;
  }
}
