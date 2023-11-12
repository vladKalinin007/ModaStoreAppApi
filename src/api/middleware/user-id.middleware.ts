import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AsyncLocalStorageService } from 'infrastructure/services/storage/als.service';

@Injectable()
export class UserIdMiddleware implements NestMiddleware {
  constructor(private alsService: AsyncLocalStorageService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.alsService.run(() => {
      this.alsService.set('userId', req.headers['x-user-id']);
      next();
    });
  }
}
