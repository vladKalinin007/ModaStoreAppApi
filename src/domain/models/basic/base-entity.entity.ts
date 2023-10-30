import { v4 as uuidv4 } from 'uuid';

export abstract class BaseEntity {
  id: string;

  constructor() {
    this.id = uuidv4();
  }
}
