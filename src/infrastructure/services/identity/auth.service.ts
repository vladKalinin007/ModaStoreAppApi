import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AppUserModel } from 'domain/models/identity/app-user.model';
import * as bcrypt from 'bcrypt';
import { CurrentUserService } from './current-user.service';
import { AddressService } from '../customer/address.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _jwtService: JwtService,
    private readonly _currentUser: CurrentUserService,
    private readonly _addressService: AddressService,
  ) {}

  async validate(email: string, password: string) {
    const user = await this._prismaService.appUser.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new NotFoundException('Authorization error', {
        cause: new Error(),
        description: 'User not found',
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      throw new UnauthorizedException('Authorization error', {
        cause: new Error(),
        description: 'Password does not match',
      });
    }

    return user as AppUserModel;
  }

  async register(user: AppUserModel) {
    const newUser = await this._prismaService.appUser.create({
      data: {
        id: user.id,
        displayName: user.displayName,
        userName: user.userName,
        email: user.email,
        emailConfirmed: user.emailConfirmed,
        normalizedEmail: user.normalizedEmail,
        passwordHash: user.passwordHash,
        securityStamp: user.securityStamp,
        phoneNumber: user.phoneNumber,
        phoneNumberConfirmed: user.phoneNumberConfirmed,
        twoFactorEnabled: user.twoFactorEnabled,
        lockoutEnd: user.lockoutEnd,
        lockoutEnabled: user.lockoutEnabled,
        accessFailedCount: user.accessFailedCount,
        concurrencyStamp: user.concurrencyStamp,
      },
    });

    if (!newUser) {
      throw new Error('User could not be created');
    }

    this._addressService.createNewAddress(newUser.id);

    this._currentUser.set(user.id);

    const payload = { username: newUser.userName, sub: newUser.id };
    return {
      access_token: this._jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '30d',
      }),
    };
  }

  async login(email: string, password: string) {
    const user = await this.validate(email, password);

    this._currentUser.set(user.id);

    const payload = { username: user.userName, sub: user.id };
    return {
      access_token: this._jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '30d',
      }),
    };
  }

  async logout(request: any) {
    this._currentUser.delete(request);
  }
}
