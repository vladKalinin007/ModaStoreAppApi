import { IQuery } from '@nestjs/cqrs';

export class GetWishlistByIdQuery implements IQuery {
  constructor(public readonly id: string) {}
}
