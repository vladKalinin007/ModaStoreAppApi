import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Wishlist } from '../../../domain/models/customer/wishlist.model';

@Injectable()
export class WishlistService {
  constructor(@Inject(CACHE_MANAGER) private readonly _cacheService: Cache) {}

  async createWishlist(wishlist: Wishlist): Promise<Wishlist> {
    await this._cacheService.set(wishlist.id, wishlist, 30 * 24 * 60 * 60);
    return this.getWishlist(wishlist.id);
  }

  async getWishlist(id: string): Promise<Wishlist> {
    return (await this._cacheService.get(id)) as Wishlist;
  }

  async updateWishlist(wishlist: Wishlist): Promise<Wishlist> {
    await this._cacheService.set(wishlist.id, wishlist, 30 * 24 * 60 * 60);
    return this.getWishlist(wishlist.id);
  }

  async deleteWishlist(id: string): Promise<void> {
    return await this._cacheService.del(id);
  }
}
