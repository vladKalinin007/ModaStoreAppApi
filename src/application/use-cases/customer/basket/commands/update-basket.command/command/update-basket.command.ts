import { ICommand } from '@nestjs/cqrs';
import { BasketDto } from '../../../../../../../api/dto/customer/basket.dto';

export class UpdateBasketCommand implements ICommand {
  readonly basketDto: BasketDto;
  readonly id: string;

  constructor(basketDto: any, id?: string) {
    this.basketDto = BasketDto.fromModel(basketDto);
    this.id = id;
  }
}
