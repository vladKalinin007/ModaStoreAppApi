import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserReviewsQuery } from '../query/get-user-reviews.query';
import { ReviewService } from 'infrastructure/services/customer/review.service';

@QueryHandler(GetUserReviewsQuery)
export class GetUserReviewsHandler
  implements IQueryHandler<GetUserReviewsQuery>
{
  constructor(private readonly _reviewSevice: ReviewService) {}

  async execute() {
    return await this._reviewSevice.getReviewsByUserId();
  }
}
