import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Store } from 'express-session';
import { UserSession } from 'domain/interfaces/storage/user-session.interface';

@Injectable()
export class SessionStore extends Store {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
    super();
  }

  async get(
    sid: string,
    callback: (err: any, session?: UserSession | null) => void,
  ): Promise<void> {
    const session = (await this.cache.get(sid)) as UserSession;
    callback(null, session);
  }

  async set(
    sid: string,
    session: UserSession,
    callback?: (err?: any) => void,
  ): Promise<void> {
    await this.cache.set(sid, session, 7 * 24 * 60 * 60);
    if (callback) callback();
  }

  async destroy(sid: string, callback?: (err?: any) => void): Promise<void> {
    await this.cache.del(sid);
    if (callback) callback();
  }
}
