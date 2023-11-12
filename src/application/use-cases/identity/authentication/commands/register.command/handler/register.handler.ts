import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from '../command/register.command';
import { AuthService } from 'infrastructure/services/identity/auth.service';
import {
  RegisterDto,
  RegisterResponseDto,
} from 'api/dto/identity/register.dto';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
  constructor(private readonly _authService: AuthService) {}

  async execute(command: RegisterCommand) {
    const user = RegisterDto.toModel(command.registerDto);
    const token = await this._authService.register(user);
    return new RegisterResponseDto(user.email, token.access_token);
  }
}
