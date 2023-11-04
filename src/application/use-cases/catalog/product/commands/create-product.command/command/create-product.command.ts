import { ICommand } from '@nestjs/cqrs';
import { ProductDto } from 'api/dto';

export class CreateProductCommand implements ICommand {
  constructor(public readonly product: ProductDto) {}
}
