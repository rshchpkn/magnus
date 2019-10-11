import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { StateType } from 'typesafe-actions';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

export type RootState = StateType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

declare var window: any;

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
);

const store = createStore(
  rootReducer,
  enhancer,
);

epicMiddleware.run(rootEpic);

export default store;
