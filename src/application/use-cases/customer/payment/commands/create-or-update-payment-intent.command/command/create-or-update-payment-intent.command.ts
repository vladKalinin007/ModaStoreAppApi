import { ICommand } from '@nestjs/cqrs';

export class CreateOrUpdatePaymentIntentCommand implements ICommand {
  constructor(public readonly basketId: string) {}
}
