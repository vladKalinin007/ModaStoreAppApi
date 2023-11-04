import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { SeenProductList } from 'domain/models/customer/seen-product-list.model';
import { SeenProduct } from 'domain/models/customer/seen-product.model';

@Injectable()
export class SeenProductService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

  async createSeenProductList(seenProductList: SeenProductList) {
    await this.cacheService.set(
      seenProductList.id,
      seenProductList,
      30 * 24 * 60 * 60,
    );
    return this.getSeenProductList(seenProductList.id);
  }

  async getSeenProductList(id: string): Promise<SeenProductList> {
    return (await this.cacheService.get(id)) as SeenProductList;
  }

  async addProductToSeenProductList(
    id: string,
    seenProductsList: SeenProductList,
  ) {
    await this.cacheService.set(id, seenProductsList, 30 * 24 * 60 * 60);
    return this.getSeenProductList(id);
  }

  async updateSeenProducts(seenProduct: SeenProduct): Promise<SeenProductList> {
    await this.cacheService.set(seenProduct.id, seenProduct, 30 * 24 * 60 * 60);
    return this.getSeenProductList(seenProduct.id);
  }

  async deleteSeenProductList(id: string): Promise<void> {
    return await this.cacheService.del(id);
  }
}
