import { IQuery } from '@nestjs/cqrs';

export class GetProductTypesQuery implements IQuery {
  constructor() {}
}
