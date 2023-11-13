import { ReviewService } from 'infrastructure/services/customer/review.service';
import { GetLatestReviewsQuery } from '../query/get-latest-reviews.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProductReviewDto } from 'api/dto';

@QueryHandler(GetLatestReviewsQuery)
export class GetLatestReviewsHandler
  implements IQueryHandler<GetLatestReviewsQuery>
{
  constructor(private readonly _reviewSevice: ReviewService) {}

  async execute(): Promise<ProductReviewDto[]> {
    const latestReviews = await this._reviewSevice.getLatestReviews();
    return latestReviews.map((review) => ProductReviewDto.fromModel(review));
  }
}
