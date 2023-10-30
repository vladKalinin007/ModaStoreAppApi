import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Basket } from '../../../domain/models/customer/basket.model';

@Injectable()
export class BasketService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

  async createBasket(basket: Basket): Promise<Basket> {
    await this.cacheService.set(basket.id, basket, 30 * 24 * 60 * 60);
    return this.getBasket(basket.id);
  }

  async getBasket(id: string): Promise<Basket> {
    return (await this.cacheService.get(id)) as Basket;
  }

  async updateBasket(basket: Basket): Promise<Basket> {
    await this.cacheService.set(basket.id, basket, 30 * 24 * 60 * 60);
    return this.getBasket(basket.id);
  }

  async deleteBasket(id: string): Promise<void> {
    return await this.cacheService.del(id);
  }
}
