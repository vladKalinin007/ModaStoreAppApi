import { ICommand } from '@nestjs/cqrs';
import { SeenProductDto } from 'api/dto/customer/seen-product.dto';

export class UpdateSeenProductCommand implements ICommand {
  constructor(
    public readonly seenProductDto: SeenProductDto,
    public readonly id: string,
  ) {}
}
