import { Action } from '@ngrx/store';
import { CounterState } from './counter.models';
import { initialState } from "./counter.const";

import { INCREMENT, DECREMENT, RESET } from './counter.actions';

export function counter (state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
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
