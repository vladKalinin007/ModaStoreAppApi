import { AppUserDto } from 'api/dto';
import { UpdateUserCommand } from '../command/update-user.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserService } from 'infrastructure/services/identity/user.service';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly _userService: UserService) {}

  async execute(command: UpdateUserCommand): Promise<AppUserDto> {
    const updatingUser = AppUserDto.toModel(command.userDto);
    const updatedUser = await this._userService.updateUser(updatingUser);
    return AppUserDto.toDto(updatedUser);
  }
}
