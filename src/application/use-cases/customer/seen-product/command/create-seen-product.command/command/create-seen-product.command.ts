import { ICommand } from '@nestjs/cqrs';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

export class CreateSeenProductCommand implements ICommand {
  constructor(public readonly seenProductListDto: SeenProductListDto) {}
}
