import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSeenProductListQuery } from '../query/get-seen-product-list.query';
import { SeenProductService } from 'infrastructure/services/customer/seen-product.service';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

@QueryHandler(GetSeenProductListQuery)
export class GetSeenProductListHandler
  implements IQueryHandler<GetSeenProductListQuery>
{
  constructor(private readonly _seenProductService: SeenProductService) {}

  async execute(query: GetSeenProductListQuery): Promise<SeenProductListDto> {
    const seenProductList = await this._seenProductService.getSeenProductList(
      query.id,
    );
    return SeenProductListDto.fromModel(seenProductList);
  }
}
