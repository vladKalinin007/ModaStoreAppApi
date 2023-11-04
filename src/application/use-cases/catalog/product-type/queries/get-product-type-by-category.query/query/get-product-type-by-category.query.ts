import { IQuery } from '@nestjs/cqrs';

export class GetProductTypeByCategoryQuery implements IQuery {
  constructor(public readonly category: string) {}
}
