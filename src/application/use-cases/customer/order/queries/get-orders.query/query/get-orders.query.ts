import { IQuery } from '@nestjs/cqrs';

export class GetOrdersQuery implements IQuery {
  constructor() {}
}
