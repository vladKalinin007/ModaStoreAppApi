import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus } from '@nestjs/cqrs';
import { Body, Post } from '@nestjs/common';

import { LoginDto, LoginResponseDto } from 'api/dto/identity/login.dto';
import { LoginCommand } from 'application/use-cases/identity/authentication/commands/login.command/command/login.command';
import { RegisterCommand } from 'application/use-cases/identity/authentication/commands/register.command/command/register.command';
import {
  RegisterDto,
  RegisterResponseDto,
} from 'api/dto/identity/register.dto';

@ApiTags('Authentication endpoints')
export class AuthController extends BaseController {
  constructor(private readonly _commandBus: CommandBus) {
    super();
  }

  @Post('authentication/login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return await this._commandBus.execute(new LoginCommand(loginDto));
  }

  @Post('authentication/register')
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<RegisterResponseDto> {
    return await this._commandBus.execute(new RegisterCommand(registerDto));
  }
}
