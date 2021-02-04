import { RedisClient, createClient } from 'redis';

import config from '../config';

export class RedisManager {
  private static client: RedisClient;

  public static getInstance(): RedisClient {
    if (!RedisManager.client) {
      RedisManager.client = createClient(config.redis.port, config.redis.host, {
      });
    }

    return RedisManager.client;
  }

  public static get(key: string): Promise<string | null> {
    return new Promise<string|null>((resolve, reject): void => {
      RedisManager.getInstance().get(key, (error: Error | null, reply: string | null) => {
        if (error) {
          reject(error);
        }
        resolve(reply);
      });
    });
  }

  public static async set(key: string, value: string, expire = -1): Promise<boolean> {
    if (expire > 0) {
      return RedisManager.setWithExpire(key, value, expire);
    }

    return RedisManager.setWithoutExpire(key, value);
  }

  private static setWithExpire(key: string, value: string, expire: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      RedisManager.getInstance().setex(key, expire, value, (error: Error|null) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  private static setWithoutExpire(key: string, value: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      RedisManager.getInstance().set(key, value, (error: Error|null) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  public static delete(key: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      RedisManager.getInstance().del(key, (error: Error|null) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  public static keys(pattern: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      RedisManager.getInstance().keys(pattern, (error: Error|null, result: string[]) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }

  public static getValues(keys: string[]): Promise<string[]> {
    return new Promise((resolve, reject) => {
      RedisManager.getInstance().mget(keys, (error: Error|null, result: string[]) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
}
