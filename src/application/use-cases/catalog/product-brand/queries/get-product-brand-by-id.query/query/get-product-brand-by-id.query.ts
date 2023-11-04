import { IQuery } from '@nestjs/cqrs';

export class GetProductBrandByIdQuery implements IQuery {
  constructor(public readonly id: string) {}
}
