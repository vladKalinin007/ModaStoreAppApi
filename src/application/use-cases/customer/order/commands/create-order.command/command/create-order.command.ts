import { ICommand } from '@nestjs/cqrs';
import { OrderDto } from 'api/dto';

export class CreateOrderCommand implements ICommand {
  constructor(public readonly orderDto: OrderDto) {}
}
