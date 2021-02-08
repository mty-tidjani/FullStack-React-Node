import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  combineReducers,
  Reducer,
} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
// @ts-ignore
import dynamicMiddlewares from 'redux-dynamic-middlewares';

// Reducer(s)
import AppReducer from './app/reducer';
// Types
import { ReduxAction, RootState } from '../types/redux';
import { ConfigureStoreFn } from '../types/function';

declare let window: any;

const middlewares: any[] = [dynamicMiddlewares, thunk, promise];

// combined reducers
const reducers: Reducer<RootState, ReduxAction> = combineReducers<
  RootState | undefined
>({
  app: AppReducer,
});

export const configureStore: ConfigureStoreFn = (
  initialState?: RootState
): Store<RootState, ReduxAction> => {
  let composeEnhancers: any;

  if (process.env.NODE_ENV !== 'production') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancers = compose;
  }

  const store: Store<RootState, ReduxAction> = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};
