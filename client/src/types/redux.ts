import { Action } from 'redux';
import { NoteBook, User } from './model';

export type ReduxAction = {
  type: string;
  payload: any;
} & Action;

export type RootState = {
  app: AppState;
};

export type AppState = {
  sesUser: User | null;
  addNoteLodx: '0' | '1' | '3'; // Pending|succes|error
  notebooks: NoteBook[];
};
