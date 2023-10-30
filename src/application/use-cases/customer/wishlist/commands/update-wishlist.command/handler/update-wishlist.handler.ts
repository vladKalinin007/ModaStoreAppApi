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
    return WishlistDto.fromModel(
      await this._wishlistService.updateWishlist(
        command.wishlistDto.toModel(command.wishlistDto.id),
      ),
    );
  }
}
