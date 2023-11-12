import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { Body, Get, Param, Post, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateOrderCommand } from 'application/use-cases/customer/order/commands/create-order.command/command/create-order.command';
import { OrderDto } from 'api/dto';
import { UpdateOrderCommand } from 'application/use-cases/customer/order/commands/update-order.command/command/update-order.command';
import { DeleteOrderCommand } from 'application/use-cases/customer/order/commands/delete-order.command/command/delete-order.command';
import { GetOrdersQuery } from 'application/use-cases/customer/order/queries/get-orders.query/query/get-orders.query';
import { GetOrderByIdQuery } from 'application/use-cases/customer/order/queries/get-order-by-id.query/query/get-order-by-id.query';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'api/guards/authenticated.guard';

@ApiTags('Order endpoints')
export class OrderController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/order/:id')
  async get(@Param('id') id: string): Promise<OrderDto> {
    return await this._queryBus.execute(new GetOrderByIdQuery(id));
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/orders')
  async getAll(): Promise<OrderDto[]> {
    return await this._queryBus.execute(new GetOrdersQuery());
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/order/:basketId')
  async create(@Param('basketId') basketId: string): Promise<OrderDto> {
    return await this._commandBus.execute(new CreateOrderCommand(basketId));
  }

  @UseGuards(AuthenticatedGuard)
  @Put('/order/:id')
  async update(
    @Body() orderDto: OrderDto,
    @Param('id') id: string,
  ): Promise<OrderDto> {
    return await this._commandBus.execute(new UpdateOrderCommand(orderDto, id));
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/order/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this._commandBus.execute(new DeleteOrderCommand(id));
  }
}
