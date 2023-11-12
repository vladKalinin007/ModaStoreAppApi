import { ReviewService } from 'infrastructure/services/customer/review.service';
import { GetLatestReviewsQuery } from '../query/get-latest-reviews.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetLatestReviewsQuery)
export class GetLatestReviewsHandler
  implements IQueryHandler<GetLatestReviewsQuery>
{
  constructor(private readonly _reviewSevice: ReviewService) {}

  async execute() {
    return await this._reviewSevice.getLatestReviews();
  }
}
