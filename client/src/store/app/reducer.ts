/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import producer from 'immer';

import * as aat from './actionTypes';

import { ReduxAction, AppState } from '../../types/redux';
import { User } from '../../types/model';

import LocalStorageManager from '../../utils/storage.manager';

const initialState: AppState = {
  sesUser: LocalStorageManager.getUserData(),
  addNoteLodx: '0',
  projects: [],
};

export const appReducer: Reducer<AppState, ReduxAction> = (
  state: AppState = initialState,
  action: ReduxAction
): AppState => {
  const { payload, type }: any = action;

  return producer(state, (draft: AppState): void => {
    switch (type) {
      // Update user session
      case `${aat.SESSION_UPDATE}_FULFILLED`:
        draft.sesUser = payload as User;
        break;
      case aat.RESET_LOADX:
        draft.addNoteLodx = '0';
        break;

      case `${aat.ADD_NOTE}_PENDING`:
        draft.addNoteLodx = '0';
        break;
      case `${aat.ADD_NOTE}_REJECTED`:
        // Todo add err message or toast
        draft.addNoteLodx = '3';
        break;
      case `${aat.ADD_NOTE}_FULFILLED`:
        draft.addNoteLodx = '1';
        draft.projects = [...state.projects, payload];
        break;
      case `${aat.LOAD_PROJECTS}_FULFILLED`:
        // test if array because response was not checked.
        if (Array.isArray(payload)) draft.projects = payload;
        break;
      default:
        break;
    }
  });
};

export default appReducer;
