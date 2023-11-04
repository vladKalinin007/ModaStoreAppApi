import { ICommand } from '@nestjs/cqrs';

export class DeleteWishlistCommand implements ICommand {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}
