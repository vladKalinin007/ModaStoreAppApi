import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBasketCommand } from '../command/create-basket.command';
import { BasketService } from '../../../../../../../infrastructure/services/customer/basket.service';
import { BasketDto } from '../../../../../../../api/dto/customer/basket.dto';

@CommandHandler(CreateBasketCommand)
export class CreateBasketHandler
  implements ICommandHandler<CreateBasketCommand>
{
  constructor(private readonly _basketService: BasketService) {}

  async execute(command: CreateBasketCommand): Promise<BasketDto> {
    return BasketDto.fromModel(
      await this._basketService.createBasket(
        command.basketDto.toModel(command.basketDto.id),
      ),
    );
  }
}
