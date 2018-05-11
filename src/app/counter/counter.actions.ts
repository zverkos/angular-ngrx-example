import { Action } from '@ngrx/store';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const RESET: string = 'RESET';

export class IncrementAction implements Action {
  public readonly type: string = INCREMENT;

  // constructor(public payload: CounterState) {}
}

export class DecrementAction implements Action {
  public readonly type: string = DECREMENT;

  // constructor(public payload: CounterState) {}
}

export class ResetAction implements Action {
  public readonly type: string = RESET;

  // constructor(public payload: CounterState) {}
}
