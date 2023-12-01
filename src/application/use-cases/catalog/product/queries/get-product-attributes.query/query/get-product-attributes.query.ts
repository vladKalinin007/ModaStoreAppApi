import { IQuery } from '@nestjs/cqrs';

export class GetProductAttributesQuery implements IQuery {
  constructor(readonly category: string) {}
}
