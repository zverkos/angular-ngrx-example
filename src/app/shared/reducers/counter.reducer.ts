import { Counter } from '../models/counter.models';
import { ActionReducer, Action } from '@ngrx/store';
import * as counter from '../actions/counter.actions';

import { DEFAULT, INCREMENT, DECREMENT, RESET } from '../actions/counter.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 10
};

export function reducer (state = initialState, action: counter.Actions): State {
  switch (action.type) {

    case DEFAULT: {
      return {
        counter: 5
      };
    }

    case INCREMENT: {
      return {
        counter: state.counter + 1
      };
    }

    case DECREMENT: {
      return {
        counter: state.counter - 1
      };
    }

    case RESET: {
      return {
        counter: 0
      };
    }

    default: {
      return {
        counter: state.counter
      };
    }
  }
}
