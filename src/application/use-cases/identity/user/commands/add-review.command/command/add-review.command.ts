import { ICommand } from '@nestjs/cqrs';
import { ProductReviewDto } from 'api/dto';

export class AddReviewCommand implements ICommand {
  constructor(public readonly reviewDto: ProductReviewDto) {}
}
