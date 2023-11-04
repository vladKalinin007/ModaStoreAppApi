import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { Body, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CreateOrderCommand } from 'application/use-cases/customer/order/commands/create-order.command/command/create-order.command';
import { OrderDto } from 'api/dto';
import { UpdateOrderCommand } from 'application/use-cases/customer/order/commands/update-order.command/command/update-order.command';
import { DeleteOrderCommand } from 'application/use-cases/customer/order/commands/delete-order.command/command/delete-order.command';
import { GetOrdersQuery } from 'application/use-cases/customer/order/queries/get-orders.query/query/get-orders.query';
import { GetOrderByIdQuery } from 'application/use-cases/customer/order/queries/get-order-by-id.query/query/get-order-by-id.query';

export class OrderController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/order/:id')
  async getOrderById(@Param('id') id: string): Promise<OrderDto> {
    return await this._queryBus.execute(new GetOrderByIdQuery(id));
  }

  @Get('/orders')
  async getOrders(): Promise<OrderDto[]> {
    return await this._queryBus.execute(new GetOrdersQuery());
  }

  @Post('/order')
  async createOrder(@Body() orderDto: OrderDto): Promise<OrderDto> {
    return await this._commandBus.execute(new CreateOrderCommand(orderDto));
  }

  @Put('/order/:id')
  async updateOrder(
    @Body() orderDto: OrderDto,
    @Param('id') id: string,
  ): Promise<OrderDto> {
    return await this._commandBus.execute(new UpdateOrderCommand(orderDto, id));
  }
  @Delete('/order/:id')
  async deleteOrder(@Param('id') id: string): Promise<void> {
    return await this._commandBus.execute(new DeleteOrderCommand(id));
  }
}
