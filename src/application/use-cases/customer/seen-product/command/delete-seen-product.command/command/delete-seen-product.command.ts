import { ICommand } from '@nestjs/cqrs';

export class DeleteSeenProductCommand implements ICommand {
  constructor(public readonly id: string) {}
}
