import { IQuery } from '@nestjs/cqrs';
import { ProductParams } from 'domain/models/catalog/product-params.model';

export class GetProductsQuery implements IQuery {
  constructor(public readonly params: ProductParams) {}
}
