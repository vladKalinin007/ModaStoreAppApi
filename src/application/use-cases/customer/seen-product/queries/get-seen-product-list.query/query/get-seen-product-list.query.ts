import { IQuery } from '@nestjs/cqrs';

export class GetSeenProductListQuery implements IQuery {
  constructor(public readonly id: string) {}
}
