import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductReviewDto } from 'api/dto';
import { AddReviewCommand } from 'application/use-cases/identity/user/commands/add-review.command/command/add-review.command';
import { GetUserReviewsQuery } from 'application/use-cases/identity/user/queries/get-user-reviews.query/query/get-user-reviews.query';
import { GetLatestReviewsQuery } from 'application/use-cases/identity/user/queries/get-latest-reviews.query/query/get-latest-reviews.query';
import { GetProductReviewsQuery } from 'application/use-cases/identity/user/queries/get-product-reviews.query/query/get-product-reviews.query';
import { ReviewToPublishDto } from 'api/dto/catalog/product-review.dto';
import { AuthenticatedGuard } from 'api/guards/authenticated.guard';

@ApiTags('ProductReview endpoints')
export class ProductReviewController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('reviews')
  async getUserReviews() {
    return await this._queryBus.execute(new GetUserReviewsQuery());
  }

  @Get('reviews/latest')
  async getLatestReviews(): Promise<ProductReviewDto[]> {
    return await this._queryBus.execute(new GetLatestReviewsQuery());
  }

  @Get('reviews/products/:id')
  async getProductReviews(
    @Param('id') productId: string,
  ): Promise<ProductReviewDto[]> {
    return await this._queryBus.execute(new GetProductReviewsQuery(productId));
  }

  @UseGuards(AuthenticatedGuard)
  @Post('reviews')
  async addUserReview(@Body() reviewDto: ReviewToPublishDto) {
    return await this._commandBus.execute(new AddReviewCommand(reviewDto));
  }
}
