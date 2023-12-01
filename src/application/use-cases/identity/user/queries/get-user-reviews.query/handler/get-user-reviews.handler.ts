import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserReviewsQuery } from '../query/get-user-reviews.query';
import { ReviewService } from 'infrastructure/services/customer/review.service';
import { ProductReviewDto } from 'api/dto';

@QueryHandler(GetUserReviewsQuery)
export class GetUserReviewsHandler
  implements IQueryHandler<GetUserReviewsQuery>
{
  constructor(private readonly _reviewSevice: ReviewService) {}

  async execute() {
    const userReviews = await this._reviewSevice.getReviewsByUserId();
    return userReviews.map((review) => ProductReviewDto.fromModel(review));
  }
}
