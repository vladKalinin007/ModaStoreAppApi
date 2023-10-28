import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteBasketCommand } from '../command/delete-basket.command';
import { BasketService } from '../../../../../../../infrastructure/services/customer/basket.service';

@CommandHandler(DeleteBasketCommand)
export class DeleteBasketHandler
  implements ICommandHandler<DeleteBasketCommand>
{
  constructor(private readonly _basketService: BasketService) {}

  async execute(command: DeleteBasketCommand): Promise<void> {
    return await this._basketService.deleteBasket(command.id);
  }
}
