import { IQuery } from '@nestjs/cqrs';

export class GetPicturesByTypeQuery implements IQuery {
  constructor(public readonly type: string) {}
}
