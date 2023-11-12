import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AsyncLocalStorageService {
  private als = new AsyncLocalStorage<Map<string, any>>();

  run(callback: (...args: any[]) => void, store?: Map<string, any>) {
    this.als.run(store || new Map(), callback);
  }

  getStore() {
    return this.als.getStore();
  }

  get(key: string) {
    return this.getStore()?.get(key);
  }

  set(key: string, value: any) {
    this.getStore()?.set(key, value);
  }
}
