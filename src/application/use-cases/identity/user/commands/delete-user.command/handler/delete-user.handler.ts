import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserService } from 'infrastructure/services/identity/user.service';
import { DeleteUserCommand } from '../command/delete-user.command';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(private readonly _userService: UserService) {}

  async execute(command: DeleteUserCommand) {
    const user = await this._userService.deleteUser(command.id);
    return !!user;
  }
}
