import { IQuery } from '@nestjs/cqrs';

export class GetBasketByIdQuery implements IQuery {
  constructor(public readonly id: string) {}
}
