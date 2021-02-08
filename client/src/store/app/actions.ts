import { AxiosResponse } from 'axios';
import * as aat from './actionTypes';
import StorageManager from '../../utils/storage.manager';
import { httpClient } from '../../utils/http-client';
import { ReduxAction } from '../../types/redux';
import { User } from '../../types/model';
import { NOTE, USERS_ME } from '../../utils/end.points';

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

type addNote = {
  title: string;
  desc: string;
};
export const addNoteQry = (data: addNote): ReduxAction => ({
  type: aat.ADD_NOTE,
  async payload(): Promise<any> {
    try {
      const res: AxiosResponse = await httpClient.post(NOTE, data);
      const { data: rtn } = res;
      if (rtn.success) return rtn.result;
      return Promise.reject(rtn.message);
    } catch (error) {
      return Promise.reject(error);
    }
  },
});

export const resetLoaders = (): ReduxAction => ({
  type: aat.RESET_LOADX,
  payload: undefined,
});

export const loadNoteBooksQry = (): ReduxAction => ({
  type: aat.LOAD_NOTEBOOKS,
  async payload(): Promise<any> {
    try {
      const res: AxiosResponse = await httpClient.get(NOTE);
      return res.data.result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
});
