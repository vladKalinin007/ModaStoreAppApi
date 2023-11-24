import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddReviewCommand } from '../command/add-review.command';
import { ReviewService } from 'infrastructure/services/customer/review.service';
import {
  ProductReviewDto,
  ReviewToPublishDto,
} from 'api/dto/catalog/product-review.dto';

@CommandHandler(AddReviewCommand)
export class AddReviewHandler implements ICommandHandler<AddReviewCommand> {
  constructor(private readonly _reviewService: ReviewService) {}

  async execute(command: AddReviewCommand) {
    const reviewModel = ReviewToPublishDto.toModel(command.reviewDto);
    const review = await this._reviewService.createReview(reviewModel);
    return ProductReviewDto.fromModel(review);
  }
}
