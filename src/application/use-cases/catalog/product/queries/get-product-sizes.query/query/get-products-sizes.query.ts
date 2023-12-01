import { IQuery } from '@nestjs/cqrs';

export class GetProductSizesQuery implements IQuery {
  constructor(readonly category: string) {}
}
