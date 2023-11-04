import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductBrandsQuery } from '../query/get-product-brands.query';
import { ProductBrandSerivce } from 'infrastructure/services/catalog/product-brand.service';
import { ProductBrandDto } from 'api/dto';

@QueryHandler(GetProductBrandsQuery)
export class GetProductBrandsHandler
  implements IQueryHandler<GetProductBrandsQuery>
{
  constructor(private readonly _productBrandService: ProductBrandSerivce) {}

  async execute(): Promise<ProductBrandDto[]> {
    const productBrands = await this._productBrandService.getAllProductBrands();
    return productBrands.map((productBrand) =>
      ProductBrandDto.fromModel(productBrand),
    );
  }
}
