import { SeenProductDto } from './seen-product.dto';

export class SeenProductListDto {
  constructor() {
    this.seenProudcts = [];
  }

  id: string;
  seenProudcts: SeenProductDto[];
}
