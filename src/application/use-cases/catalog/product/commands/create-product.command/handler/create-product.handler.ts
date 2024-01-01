import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../command/create-product.command';
import { ProductService } from 'infrastructure/services/catalog/product.service';
import { ProductDto } from 'api/dto';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly _productService: ProductService) {}

  async execute(command: CreateProductCommand) {
    const product = ProductDto.toModel(command.product);
    const createdProduct = await this._productService.createProduct(product);
    return createdProduct;
  }
}
