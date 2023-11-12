import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { SessionStore } from './session.store';
import { promisify } from 'util';

@Injectable()
export class CurrentUserService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly _cacheService: Cache,
    private readonly _sessionStore: SessionStore,
  ) {}

  async get(): Promise<string> {
    return (await this._cacheService.get('currentUserId')) as string;
  }

  async set(id: string) {
    this._cacheService.set('currentUserId', id, 30 * 24 * 60 * 60);
  }

  async delete(req: any) {
    const sid = req.sessionID;
    try {
      const destroySession = promisify(req.session.destroy).bind(req.session);

      await destroySession();

      await this._sessionStore.destroy(sid);

      await this._cacheService.del('currentUserId');

      return 'Logout successful';
    } catch (err) {
      return {
        message: 'Logout failed',
        error: err,
      };
    }
  }
}
