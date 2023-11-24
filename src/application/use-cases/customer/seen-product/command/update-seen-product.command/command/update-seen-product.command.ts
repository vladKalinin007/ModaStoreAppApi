import { ICommand } from '@nestjs/cqrs';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

export class UpdateSeenProductCommand implements ICommand {
  constructor(
    public readonly seenProductListDto: SeenProductListDto,
    public readonly id: string,
  ) {}
}
