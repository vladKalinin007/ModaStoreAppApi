import { ICommand } from '@nestjs/cqrs';

export class DeleteWishlistCommand implements ICommand {
  readonly key: string;
  constructor(key: string) {
    this.key = key;
  }
}
