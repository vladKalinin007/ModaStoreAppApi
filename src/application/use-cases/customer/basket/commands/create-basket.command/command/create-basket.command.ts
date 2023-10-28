import { ICommand } from '@nestjs/cqrs';
import { BasketDto } from '../../../../../../../api/dto/customer/basket.dto';

export class CreateBasketCommand implements ICommand {
  constructor(
    public readonly basketDto: BasketDto,
    public readonly id?: string,
  ) {}
}
