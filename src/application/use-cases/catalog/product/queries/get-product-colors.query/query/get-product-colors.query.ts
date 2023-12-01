import { IQuery } from '@nestjs/cqrs';

export class GetProductColorsQuery implements IQuery {
  constructor(readonly category: string) {}
}
