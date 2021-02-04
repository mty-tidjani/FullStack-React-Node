import { Action } from "redux";
import { User } from "./model";

export type ReduxAction = {
  type: string;
  payload: any;
} & Action;

export type RootState = {
  app: AppState;
};

export type AppState = {
  sesUser: User | null;
};
