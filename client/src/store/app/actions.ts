import { AxiosResponse } from 'axios';
import { VoidActionFn } from '../../types/function';
import * as aat from './actionTypes';
import StorageManager from '../../utils/storage.manager';
import { httpClient } from '../../utils/http-client';
import { ReduxAction } from '../../types/redux';

export const getUserASession: VoidActionFn = (): ReduxAction => ({
  type: aat.SESSION_UPDATE,
  async payload(): Promise<any> {
    try {
      const res: AxiosResponse = await httpClient.get('users/me');
      StorageManager.setUserData(res.data.result.user);
      StorageManager.setUserToken(res.data.result.token);

      return res.data.result.user;
    } catch (error) {
      return Promise.reject(error);
    }
  },
});
