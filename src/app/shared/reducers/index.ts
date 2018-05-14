import { ActionReducer } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { combineReducers } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

const reducers = {
  counter: fromCounter.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}
