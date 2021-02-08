import { Store } from 'redux';
import { ReduxAction, RootState } from './redux';

export type ConfigureStoreFn = (
  initialState?: RootState
) => Store<RootState, ReduxAction>;
export type VoidActionFn = () => void;
