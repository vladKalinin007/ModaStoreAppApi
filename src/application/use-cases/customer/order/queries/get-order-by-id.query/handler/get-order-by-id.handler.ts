import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderByIdQuery } from '../query/get-order-by-id.query';
import { OrderService } from 'infrastructure/services/customer/order.service';

@QueryHandler(GetOrderByIdQuery)
export class GetOrderByIdHandler implements IQueryHandler<GetOrderByIdQuery> {
  constructor(private readonly _orderService: OrderService) {}

  async execute(query: GetOrderByIdQuery) {
    const order = await this._orderService.getOrderById(query.id);
    return order;
  }
}
