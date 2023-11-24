import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductReviewsQuery } from '../query/get-product-reviews.query';
import { ProductReviewDto } from 'api/dto';
import { ReviewService } from 'infrastructure/services/customer/review.service';

@QueryHandler(GetProductReviewsQuery)
export class GetProductReviewsHandler
  implements IQueryHandler<GetProductReviewsQuery>
{
  constructor(private readonly _reviewService: ReviewService) {}

  async execute(query: GetProductReviewsQuery): Promise<ProductReviewDto[]> {
    const productReviews = await this._reviewService.getReviewsByProductId(
      query.productId,
    );

    return productReviews.map((review) => ProductReviewDto.fromModel(review));
  }
}
