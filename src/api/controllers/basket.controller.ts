import { BaseController } from './base.controller';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBasketCommand } from '../../application/use-cases/customer/basket/commands/create-basket.command/command/create-basket.command';
import { BasketDto } from '../dto/customer/basket.dto';
import { UpdateBasketCommand } from '../../application/use-cases/customer/basket/commands/update-basket.command/command/update-basket.command';
import { DeleteBasketCommand } from '../../application/use-cases/customer/basket/commands/delete-basket.command/command/delete-basket.command';
import { GetBasketByIdQuery } from '../../application/use-cases/customer/basket/queries/get-basket-by-id.query/query/get-basket-by-id.query';

@ApiTags('Basket')
export class BasketController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/basket/:id')
  @ApiResponse({ status: 200, description: 'Returns the basket' })
  async get(@Param('id') id: string): Promise<BasketDto> {
    const basket = await this._queryBus.execute(new GetBasketByIdQuery(id));

    if (!basket) {
      return await this._commandBus.execute(
        new CreateBasketCommand(new BasketDto(id)),
      );
    }

    return basket;
  }

  @Post('/basket/:id')
  @ApiResponse({ status: 200, description: 'Creates the basket' })
  async createBasket(
    @Body() basketDto: BasketDto,
    @Param('id') id: string,
  ): Promise<BasketDto> {
    return await this._commandBus.execute(
      new CreateBasketCommand(new BasketDto(id)),
    );
  }

  @Put('/basket/:id')
  async updateBasket(
    @Body() basketDto: BasketDto,
    @Param('id') id: string,
  ): Promise<BasketDto> {
    return await this._commandBus.execute(
      new UpdateBasketCommand(basketDto, id),
    );
  }

  @Delete('/basket/:key')
  async deleteBasket(@Param('key') key: string): Promise<void> {
    await this._commandBus.execute(new DeleteBasketCommand(key));
  }
}
