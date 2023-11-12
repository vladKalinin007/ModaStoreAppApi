import { ICommand } from '@nestjs/cqrs';

export class LogoutCommand implements ICommand {
  constructor(readonly request: any) {}
}
