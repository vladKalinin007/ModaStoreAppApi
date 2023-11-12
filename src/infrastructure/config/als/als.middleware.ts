import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AlsMiddleware implements NestMiddleware {
  constructor(private readonly _als: AsyncLocalStorage<any>) {}

  use(req: any, res: any, next: () => void) {
    const store = {
      correlationKey: req.headers['x-correlation-key'],
      authentication: req.headers['Authentication'],
      userId: req.headers['x-user-id'],
    };
    this._als.run(store, () => next());
  }
}
