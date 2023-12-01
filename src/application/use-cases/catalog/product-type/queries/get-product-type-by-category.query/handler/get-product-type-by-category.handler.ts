import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductTypeByCategoryQuery } from '../query/get-product-type-by-category.query';
import { ProductTypeService } from 'infrastructure/services/catalog/product-type.service';
import { ProductTypeDto } from 'api/dto';

@QueryHandler(GetProductTypeByCategoryQuery)
export class GetProductTypeByCategoryHandler
  implements IQueryHandler<GetProductTypeByCategoryQuery>
{
  constructor(private readonly _productTypeService: ProductTypeService) {}

  async execute(
    query: GetProductTypeByCategoryQuery,
  ): Promise<ProductTypeDto[]> {
    const productTypes =
      await this._productTypeService.getProductTypeByCategory(query.category);
    return productTypes.map((productType) =>
      ProductTypeDto.fromModel(productType),
    );
  }
}
