import { AxiosResponse } from 'axios';
import * as aat from './actionTypes';
import StorageManager from '../../utils/storage.manager';
import { httpClient } from '../../utils/http-client';
import { ReduxAction } from '../../types/redux';
import { User } from '../../types/model';
import { USERS_ME } from '../../utils/end.points';

export const getUserSession = (): ReduxAction => ({
  type: aat.SESSION_UPDATE,
  async payload(): Promise<any> {
    try {
      const res: AxiosResponse = await httpClient.get(USERS_ME);
      StorageManager.setUserData(res.data.result.user);
      StorageManager.setUserToken(res.data.result.token);

      return res.data.result.user;
    } catch (error) {
      return Promise.reject(error);
    }
  },
});

export const saveSessionData = (data: {
  user: User;
  token: string;
}): ReduxAction => {
  StorageManager.setUserData(data.user);
  StorageManager.setUserToken(data.token);

  return {
    type: aat.SESSION_UPDATE,
    payload: data.user,
  };
};
