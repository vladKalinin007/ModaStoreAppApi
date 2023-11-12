import { Session } from 'express-session';

export interface UserSession extends Session {
  user?: { id: string };
}
