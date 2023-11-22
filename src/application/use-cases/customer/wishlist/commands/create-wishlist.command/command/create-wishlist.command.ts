import { ICommand } from '@nestjs/cqrs';
import { WishlistDto } from '../../../../../../../api/dto/customer/wishlist.dto';

export class CreateWishlistCommand implements ICommand {
  constructor(public readonly wishlistDto: WishlistDto) {}
}
