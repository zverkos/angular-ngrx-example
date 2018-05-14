import { Counter } from '../models/counter.models';
import { ActionReducer, Action } from '@ngrx/store';
import * as counter from '../actions/counter.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 10
};

export function reducer (state = initialState, action: counter.Actions): State {
  switch (action.type) {

    case counter.DEFAULT: {
      return {
        counter: 5
      };
    }

    case counter.INCREMENT: {
      return {
        counter: state.counter + 1
      };
    }

    case counter.DECREMENT: {
      return {
        counter: state.counter - 1
      };
    }

    case counter.RESET: {
      return {
        counter: 0
      };
    }

    case counter.CURRENT: {
      return {
        counter: state.counter
      };
    }

    default: {
      return {
        counter: state.counter
      };
    }
  }
}
