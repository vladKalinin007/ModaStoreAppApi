import { CommandBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { Param, Post } from '@nestjs/common';
import { CreateOrUpdatePaymentIntentCommand } from 'application/use-cases/customer/payment/commands/create-or-update-payment-intent.command/command/create-or-update-payment-intent.command';

export class PaymentController extends BaseController {
  constructor(private readonly _commandBus: CommandBus) {
    super();
  }

  @Post('/payment/:basketId')
  async createPaymentIntent(@Param('basketId') basketId: string) {
    return await this._commandBus.execute(
      new CreateOrUpdatePaymentIntentCommand(basketId),
    );
  }
}
