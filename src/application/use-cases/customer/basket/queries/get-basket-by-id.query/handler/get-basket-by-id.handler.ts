import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBasketByIdQuery } from '../query/get-basket-by-id.query';
import { BasketService } from '../../../../../../../infrastructure/services/customer/basket.service';
import { BasketDto } from '../../../../../../../api/dto/customer/basket.dto';

@QueryHandler(GetBasketByIdQuery)
export class GetBasketByIdHandler implements IQueryHandler<GetBasketByIdQuery> {
  constructor(private readonly _basketService: BasketService) {}

  async execute(query: GetBasketByIdQuery) {
    const basket = await this._basketService.getBasket(query.id);

    if (!basket) {
      return null;
    } else {
      return BasketDto.fromModel(basket);
    }
  }
}
