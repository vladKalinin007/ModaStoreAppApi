import { ICommand } from '@nestjs/cqrs';
import { WishlistDto } from '../../../../../../../api/dto/customer/wishlist.dto';

export class UpdateWishlistCommand implements ICommand {
  readonly wishlistDto: WishlistDto;
  readonly id: string;

  constructor(wishlistDto: any, id?: string) {
    this.wishlistDto = WishlistDto.fromModel(wishlistDto);
    this.id = id;
  }
}
