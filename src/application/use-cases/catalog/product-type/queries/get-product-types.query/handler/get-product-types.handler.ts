import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductTypesQuery } from '../query/get-product-types.query';
import { ProductTypeService } from 'infrastructure/services/catalog/product-type.service';
import { ProductTypeDto } from 'api/dto';

@QueryHandler(GetProductTypesQuery)
export class GetProductTypesHandler
  implements IQueryHandler<GetProductTypesQuery>
{
  constructor(private readonly _productTypeService: ProductTypeService) {}

  async execute(): Promise<ProductTypeDto[]> {
    const productTypes = await this._productTypeService.getAllProductTypes();
    return productTypes.map((productType) =>
      ProductTypeDto.fromModel(productType),
    );
  }
}
