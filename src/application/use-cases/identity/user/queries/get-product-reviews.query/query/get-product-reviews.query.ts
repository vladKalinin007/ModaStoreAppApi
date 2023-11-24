import { IQuery } from '@nestjs/cqrs';

export class GetProductReviewsQuery implements IQuery {
  constructor(public readonly productId: string) {}
}
