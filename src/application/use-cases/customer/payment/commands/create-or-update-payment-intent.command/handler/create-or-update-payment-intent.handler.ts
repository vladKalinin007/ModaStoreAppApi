import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrUpdatePaymentIntentCommand } from '../command/create-or-update-payment-intent.command';
import { PaymentService } from 'infrastructure/services/customer/payment.service';
import { BasketDto } from 'api/dto/customer/basket.dto';

@CommandHandler(CreateOrUpdatePaymentIntentCommand)
export class CreateOrUpdatePaymentIntentHandler
  implements ICommandHandler<CreateOrUpdatePaymentIntentCommand>
{
  constructor(private readonly _paymentService: PaymentService) {}
  async execute(command: CreateOrUpdatePaymentIntentCommand) {
    const basket = await this._paymentService.createOrUpdatePaymentIntent(
      command.basketId,
    );

    return BasketDto.fromModel(basket);
  }
}
