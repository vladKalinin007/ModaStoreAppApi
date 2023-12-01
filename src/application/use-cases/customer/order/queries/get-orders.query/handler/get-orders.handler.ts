import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrdersQuery } from '../query/get-orders.query';
import { OrderService } from 'infrastructure/services/customer/order.service';

@QueryHandler(GetOrdersQuery)
export class GetOrdersHandler implements IQueryHandler<GetOrdersQuery> {
  constructor(readonly _orderService: OrderService) {}

  async execute() {
    return await this._orderService.getOrdersByUserEmail();
  }
}
