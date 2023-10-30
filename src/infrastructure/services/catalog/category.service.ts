import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CategoryModel } from 'domain/models/catalog/category.model';

@Injectable()
export class CategoryService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getCategories() {
    return this._prismaService.category.findMany() as unknown as CategoryModel[];
  }
}
