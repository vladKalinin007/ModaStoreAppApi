import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { SeenProductDto } from 'api/dto/customer/seen-product.dto';
import { GetSeenProductListQuery } from 'application/use-cases/customer/seen-product/queries/get-seen-product-list.query/query/get-seen-product-list.query';
import { CreateSeenProductCommand } from 'application/use-cases/customer/seen-product/command/create-seen-product.command/command/create-seen-product.command';
import { UpdateSeenProductCommand } from 'application/use-cases/customer/seen-product/command/update-seen-product.command/command/update-seen-product.command';
import { DeleteSeenProductCommand } from 'application/use-cases/customer/seen-product/command/delete-seen-product.command/command/delete-seen-product.command';

@ApiTags('SeenProduct endpoints')
export class SeenProductController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/seen-product/:id')
  async getSeenProduct(@Param('id') id: string) {
    return await this._queryBus.execute(new GetSeenProductListQuery(id));
  }

  @Post('/seen-product')
  async createSeenProduct(@Body() seenProductDto: SeenProductDto) {
    return await this._commandBus.execute(
      new CreateSeenProductCommand(seenProductDto),
    );
  }

  @Put('/seen-product/:id')
  async updateSeenProduct(
    @Body() seenProductDto: SeenProductDto,
    @Param('id') id: string,
  ) {
    return await this._commandBus.execute(
      new UpdateSeenProductCommand(seenProductDto, id),
    );
  }

  @Delete('/seen-product/:id')
  async deleteSeenProduct(@Param('id') key: string) {
    await this._commandBus.execute(new DeleteSeenProductCommand(key));
  }
}
