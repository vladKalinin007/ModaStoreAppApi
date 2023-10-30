import { Get } from '@nestjs/common';
import { BaseController } from './base.controller';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';
import { GetProductsQuery } from '../../application/use-cases/catalog/product/queries/get-products.query/query/get-products.query';
import { ProductDto } from '../../../prisma/generated/dtos';

@ApiTags('Product endpoints')
export class ProductController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('/products')
  @ApiResponse({ status: 200, description: 'Returns all products' })
  public getProducts(): Promise<ProductDto[]> {
    return this._queryBus.execute(new GetProductsQuery());
  }
}
