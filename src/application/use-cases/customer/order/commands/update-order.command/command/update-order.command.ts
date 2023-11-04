import { ICommand } from '@nestjs/cqrs';
import { OrderDto } from 'api/dto';

export class UpdateOrderCommand implements ICommand {
  constructor(
    public readonly orderDto: OrderDto,
    public readonly id: string,
  ) {}
}
