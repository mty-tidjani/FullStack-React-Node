/* eslint-disable no-param-reassign */
import { Reducer } from "redux";
import producer from "immer";

import * as aat from "./actionTypes";

import { ReduxAction, AppState } from "../../types/redux";
import { User } from "../../types/model";

import LocalStorageManager from "../../utils/storage.manager";

const initialState: AppState = {
  sesUser: LocalStorageManager.getUserData(),
};

export const appReducer: Reducer<AppState, ReduxAction> = (
  state: AppState = initialState,
  action: ReduxAction
): AppState => {
  const { payload, type }: any = action;

  return producer(state, (draft: AppState): void => {
    switch (type) {
      // Get all countries
      case `${aat.SESSION_UPDATE}_FULFILLED`:
        draft.sesUser = payload as User;
        break;

      default:
        break;
    }
  });
};

export default appReducer;
