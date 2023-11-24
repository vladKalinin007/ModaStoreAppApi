import { ICommand } from '@nestjs/cqrs';
import { ReviewToPublishDto } from 'api/dto/catalog/product-review.dto';

export class AddReviewCommand implements ICommand {
  constructor(public readonly reviewDto: ReviewToPublishDto) {}
}
