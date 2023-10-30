import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WishlistDto } from '../dto/customer/wishlist.dto';
import { GetWishlistByIdQuery } from '../../application/use-cases/customer/wishlist/queries/get-wishlist-by-id.query/query/get-wishlist-by-id.query';
import { CreateWishlistCommand } from '../../application/use-cases/customer/wishlist/commands/create-wishlist.command/command/create-wishlist.command';
import { UpdateWishlistCommand } from '../../application/use-cases/customer/wishlist/commands/update-wishlist.command/command/update-wishlist.command';
import { DeleteWishlistCommand } from '../../application/use-cases/customer/wishlist/commands/delete-wishlist.command/command/delete-wishlist.command';

@ApiTags('Wishlist endpoints')
export class WishlistController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/wishlist/:id')
  @ApiResponse({ status: 200, description: 'Returns the full wishlist' })
  async getWishlist(@Param('id') id: string): Promise<WishlistDto> {
    const wishlist = await this._queryBus.execute(new GetWishlistByIdQuery(id));

    if (!wishlist) {
      return await this._commandBus.execute(
        new CreateWishlistCommand(new WishlistDto(id)),
      );
    }

    return wishlist;
  }

  @Post('/wishlist/:id')
  @ApiResponse({ status: 200, description: 'Creates the wishlist' })
  async createWishlist(
    @Body() wishlistDto: WishlistDto,
    @Param('id') id: string,
  ): Promise<WishlistDto> {
    return await this._commandBus.execute(
      new CreateWishlistCommand(new WishlistDto(id, wishlistDto)),
    );
  }

  @Put('/wishlist/:id')
  async updateWishlist(
    @Body() wishlistDto: WishlistDto,
    @Param('id') id: string,
  ): Promise<WishlistDto> {
    return await this._commandBus.execute(
      new UpdateWishlistCommand(wishlistDto, id),
    );
  }

  @Delete('/wishlist/:key')
  async deleteWishlist(@Param('key') key: string): Promise<void> {
    await this._commandBus.execute(new DeleteWishlistCommand(key));
  }
}
