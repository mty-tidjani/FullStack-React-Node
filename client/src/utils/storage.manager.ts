import { User } from '../types/models';
import { USER_DATA_KEY } from './constants';

export default class StorageManager {
  /**
     *
     */
  static setUserData(user: User): void {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  static getUserData(): User|null {
    const user: string|null = localStorage.getItem(USER_DATA_KEY);

    try {
      if (user) {
        return JSON.parse(user);
      }
    } catch (e) {
      // console.log('User Data Parsing Error => ', e.toString());
    }

    return null;
  }
}
