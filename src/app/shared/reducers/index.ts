import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromCounterToo from './counter-too.reducer';
import { combineReducers } from '@ngrx/store';

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
