import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../states/app.state';
import { configReducers } from './config.redusers';
import { userReducers } from './user.redusers';

import { combineReducers } from '@ngrx/store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};


// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//     return productionReducer(state, action);
// }
