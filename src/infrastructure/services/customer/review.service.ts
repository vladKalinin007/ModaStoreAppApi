import { Injectable } from '@nestjs/common';
import { ProductReviewModel } from 'domain/models/catalog/product-review.model';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { CurrentUserService } from '../identity/current-user.service';
import { CreateReviewRelations } from 'infrastructure/helpers/review-relations.helper';

@Injectable()
export class ReviewService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _currentUser: CurrentUserService,
  ) {}

  private getUserId() {
    return this._currentUser.get();
  }

  async getReviewById(id: string) {
    return await this._prismaService.productReview.findUnique({
      where: { id },
    });
  }

  async getReviewsByProductId(productId: string) {
    return await this._prismaService.productReview.findMany({
      where: { productId },
    });
  }

  async getLatestReviews(): Promise<ProductReviewModel[]> {
    return (await this._prismaService.productReview.findMany({
      orderBy: { createdOnUtc: 'desc' },
      take: 3,
      include: CreateReviewRelations(),
    })) as ProductReviewModel[];
  }

  async getReviewsByUserId() {
    const userId = await this.getUserId();
    return await this._prismaService.productReview.findMany({
      where: { userId },
    });
  }

  async createReview(review: any) {
    return await this._prismaService.productReview.create({ data: review });
  }

  async updateReview(review: any) {
    return await this._prismaService.productReview.update({
      where: { id: review.id },
      data: review,
    });
  }

  async deleteReview(id: string) {
    return await this._prismaService.productReview.delete({ where: { id } });
  }
}
