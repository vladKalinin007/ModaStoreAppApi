import { ICommand } from '@nestjs/cqrs';
import { ProductDto } from 'api/dto';

export class UpdateProductCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly product: ProductDto,
  ) {}
}
