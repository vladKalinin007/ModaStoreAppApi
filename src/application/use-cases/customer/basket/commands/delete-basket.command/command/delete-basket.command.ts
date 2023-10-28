import { ICommand } from '@nestjs/cqrs';

export class DeleteBasketCommand implements ICommand {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}
