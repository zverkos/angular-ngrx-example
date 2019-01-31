import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../states/app.state';
import { configReducers } from './config.redusers';
import { userReducers } from './user.redusers';


import * as fromCounter from './counter.reducer';
import * as fromCounterToo from './counter-too.reducer';
import { combineReducers } from '@ngrx/store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
}

export interface State {
  counter: fromCounter.State;
  counterToo: fromCounterToo.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer,
  counterToo: fromCounterToo.reducer
};

// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//     return productionReducer(state, action);
// }
