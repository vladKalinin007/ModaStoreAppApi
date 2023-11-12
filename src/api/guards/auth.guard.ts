import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new ForbiddenException('Access denied');
    }

    const token = authHeader.split(' ')[1]; // This will remove the "Bearer " prefix

    if (!token) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}
