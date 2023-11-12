import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus } from '@nestjs/cqrs';
import { Body, Post, Req, UseGuards } from '@nestjs/common';

import { LoginDto, LoginResponseDto } from 'api/dto/identity/login.dto';
import { LoginCommand } from 'application/use-cases/identity/authentication/commands/login.command/command/login.command';
import { LocalAuthGuard } from 'api/guards/local-auth.guard';
import { AuthenticatedGuard } from 'api/guards/authenticated.guard';
import { LogoutCommand } from 'application/use-cases/identity/authentication/commands/logout.command/command/logout.command';

@ApiTags('Authentication endpoints')
export class AuthController extends BaseController {
  constructor(private readonly _commandBus: CommandBus) {
    super();
  }

  @UseGuards(LocalAuthGuard)
  @Post('authentication/login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return await this._commandBus.execute(new LoginCommand(loginDto));
  }

  @UseGuards(AuthenticatedGuard)
  @Post('authentication/logout')
  async logout(@Req() req: any): Promise<void> {
    return await this._commandBus.execute(new LogoutCommand(req));
  }
}
