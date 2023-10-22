import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class BasketService {

    constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

    async setBasket() {
        return await this.cacheService.set('basket', 'basket');
    }
}
