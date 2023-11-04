// import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
// import { DeleteWishlistCommand } from '../command/delete-wishlist.command';
// import { WishlistService } from '../../../../../../../infrastructure/services/customer/wishlist.service';

// @CommandHandler(DeleteWishlistCommand)
// export class DeleteWishlistHandler
//   implements ICommandHandler<DeleteWishlistCommand>
// {
//   constructor(private readonly _wishlistService: WishlistService) {}

//   async execute(command: DeleteWishlistCommand): Promise<void> {
//     await this._wishlistService.deleteWishlist(command.key);
//   }
// }
