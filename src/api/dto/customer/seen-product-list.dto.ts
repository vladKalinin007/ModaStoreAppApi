import { SeenProductList } from 'domain/models/customer/seen-product-list.model';
import { SeenProductDto } from './seen-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SeenProductListDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  seenProudcts: SeenProductDto[];

  constructor(seenProductList: SeenProductList) {
    this.id = seenProductList.id;

    this.seenProudcts = seenProductList.seenProducts.map((seenProduct) =>
      SeenProductDto.from(seenProduct),
    );
  }

  toModel() {
    return new SeenProductList(this.id, this.seenProudcts);
  }

  static toModel(seenProductListDto: SeenProductListDto): SeenProductList {
    return new SeenProductList(
      seenProductListDto.id,
      seenProductListDto.seenProudcts,
    );
  }

  static from(seenProductList: SeenProductList): SeenProductListDto {
    return new SeenProductListDto(seenProductList);
  }
}
