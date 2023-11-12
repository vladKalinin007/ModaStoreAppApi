import { AppUserDto } from 'api/dto';
import { UpdateUserCommand } from '../command/update-user.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserService } from 'infrastructure/services/identity/user.service';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly _userService: UserService) {}

  async execute(command: UpdateUserCommand) {
    const updateUser = AppUserDto.toModel(command.userDto);

    return await this._userService.updateUser(updateUser);
  }
}
