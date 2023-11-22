import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateWishlistCommand } from '../command/update-wishlist.command';
import { WishlistService } from '../../../../../../../infrastructure/services/customer/wishlist.service';
import { WishlistDto } from '../../../../../../../api/dto/customer/wishlist.dto';

@CommandHandler(UpdateWishlistCommand)
export class UpdateWishlistHandler
  implements ICommandHandler<UpdateWishlistCommand>
{
  constructor(private readonly _wishlistService: WishlistService) {}

  async execute(command: UpdateWishlistCommand): Promise<WishlistDto> {
    const wishlist = WishlistDto.toModel(command.wishlistDto);
    const result = await this._wishlistService.updateWishlist(wishlist);
    return WishlistDto.fromModel(result);
  }
}
