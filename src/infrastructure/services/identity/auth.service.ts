import { Injectable } from '@nestjs/common';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AppUserModel } from 'domain/models/identity/app-user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _jwtService: JwtService,
  ) {}

  async register(user: AppUserModel) {
    const hashedPassword = await bcrypt.hash(user.passwordHash, 10);

    const newUser = await this._prismaService.appUser.create({
      data: {
        id: user.id,
        displayName: user.displayName,
        userName: user.userName,
        email: user.email,
        emailConfirmed: user.emailConfirmed,
        normalizedEmail: user.normalizedEmail,
        passwordHash: hashedPassword,
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

    const payload = { username: newUser.userName, sub: newUser.id };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }

  async login(email: string, password: string) {
    const user = await this._prismaService.appUser.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      throw new Error('Password is incorrect');
    }

    const payload = { username: user.userName, sub: user.id };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
