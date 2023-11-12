import { OrderService } from 'infrastructure/services/customer/order.service';
import { CreateOrderCommand } from '../command/create-order.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly _orderService: OrderService) {}

  async execute(command: CreateOrderCommand): Promise<any> {
    return await this._orderService.createOrder(command.basketId);
  }
}
