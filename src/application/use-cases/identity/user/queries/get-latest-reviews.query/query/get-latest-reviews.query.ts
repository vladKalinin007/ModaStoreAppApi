import { IQuery } from '@nestjs/cqrs';

export class GetLatestReviewsQuery implements IQuery {
  constructor() {}
}
