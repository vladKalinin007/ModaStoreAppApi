import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../command/login.command';
import { AuthService } from 'infrastructure/services/identity/auth.service';
import { LoginResponseDto } from 'api/dto/identity/login.dto';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(private readonly _authService: AuthService) {}

  async execute(command: LoginCommand) {
    const token = await this._authService.login(
      command.email,
      command.password,
    );

    if (!token) {
      throw new Error('Invalid credentials');
    }

    return new LoginResponseDto(command.email, token.access_token);
  }
}
