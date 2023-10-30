import { GetWishlistByIdQuery } from './../query/get-wishlist-by-id.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { WishlistService } from '../../../../../../../infrastructure/services/customer/wishlist.service';
import { WishlistDto } from '../../../../../../../api/dto/customer/wishlist.dto';

@QueryHandler(GetWishlistByIdQuery)
export class GetWishlistByIdHandler
  implements IQueryHandler<GetWishlistByIdQuery>
{
  constructor(private readonly _wishlistService: WishlistService) {}

  async execute(query: GetWishlistByIdQuery) {
    const wishlist = await this._wishlistService.getWishlist(query.id);

    if (!wishlist) {
      return null;
    } else {
      return WishlistDto.fromModel(wishlist);
    }
  }
}
