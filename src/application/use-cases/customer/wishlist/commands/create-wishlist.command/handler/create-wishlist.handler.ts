import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateWishlistCommand } from '../command/create-wishlist.command';
import { WishlistService } from '../../../../../../../infrastructure/services/customer/wishlist.service';
import { WishlistDto } from '../../../../../../../api/dto/customer/wishlist.dto';

@CommandHandler(CreateWishlistCommand)
export class CreateWishlistHandler
  implements ICommandHandler<CreateWishlistCommand>
{
  constructor(private readonly _wishlistService: WishlistService) {}

  async execute(command: CreateWishlistCommand): Promise<WishlistDto> {
    const wishlist = WishlistDto.toModel(command.wishlistDto);
    const result = await this._wishlistService.createWishlist(wishlist);
    return WishlistDto.fromModel(result);
  }
}
