import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutCommand } from '../command/logout.command';
import { AuthService } from 'infrastructure/services/identity/auth.service';

@CommandHandler(LogoutCommand)
export class LogoutHandler implements ICommandHandler<LogoutCommand> {
  constructor(private readonly _authService: AuthService) {}

  async execute(command: LogoutCommand): Promise<void> {
    return await this._authService.logout(command.request);
  }
}
