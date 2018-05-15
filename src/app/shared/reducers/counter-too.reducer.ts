import { Counter } from '../models/counter.models';
import { ActionReducer, Action } from '@ngrx/store';
import * as counter from '../actions/counter-too.actions';

export interface State {
  counterToo: number;
}

export const initialState: State = {
  counterToo: 15
};

export function reducer (state = initialState, action: counter.Actions): State {
  switch (action.type) {

    case counter.DEFAULT: {
      return {
        counterToo: 5
      };
    }

    case counter.INCREMENT: {
      return {
        counterToo: state.counterToo + 1
      };
    }

    case counter.DECREMENT: {
      return {
        counterToo: state.counterToo - 1
      };
    }

    case counter.RESET: {
      return {
        counterToo: 0
      };
    }

    case counter.CURRENT: {
      return {
        counterToo: state.counterToo
      };
    }

    default: {
      return {
        counterToo: state.counterToo
      };
    }
  }
}
