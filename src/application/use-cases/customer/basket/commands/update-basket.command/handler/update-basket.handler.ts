import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateBasketCommand } from '../command/update-basket.command';
import { BasketService } from '../../../../../../../infrastructure/services/customer/basket.service';
import { BasketDto } from '../../../../../../../api/dto/customer/basket.dto';

@CommandHandler(UpdateBasketCommand)
export class UpdateBasketHandler
  implements ICommandHandler<UpdateBasketCommand>
{
  constructor(private readonly _basketService: BasketService) {}

  async execute(command: UpdateBasketCommand): Promise<BasketDto> {
    const basket = BasketDto.toModel(command.basketDto);
    const updatedBasket = await this._basketService.updateBasket(basket);
    return BasketDto.fromModel(updatedBasket);
  }
}
