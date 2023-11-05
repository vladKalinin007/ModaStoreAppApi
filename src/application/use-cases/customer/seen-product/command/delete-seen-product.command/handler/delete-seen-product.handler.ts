import { SeenProductService } from 'infrastructure/services/customer/seen-product.service';
import { DeleteSeenProductCommand } from '../command/delete-seen-product.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteSeenProductCommand)
export class DeleteSeenProductHandler
  implements ICommandHandler<DeleteSeenProductCommand>
{
  constructor(private readonly _seenProductService: SeenProductService) {}

  async execute(command: DeleteSeenProductCommand) {
    await this._seenProductService.deleteSeenProductList(command.id);
  }
}
