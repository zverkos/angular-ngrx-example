import { Action } from '@ngrx/store';
import { Counter } from '../models/counter.models';

export const DEFAULT =   '[Counter] DEFAULT';
export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET =     '[Counter] RESET';

export class DefaultAction implements Action {
  public readonly type: string = DEFAULT;

  // constructor(public payload: Counter) {}
}

export class IncrementAction implements Action {
  public readonly type: string = INCREMENT;

  // constructor(public payload: Counter) {}
}

export class DecrementAction implements Action {
  public readonly type: string = DECREMENT;

  // constructor(public payload: Counter) {}
}

export class ResetAction implements Action {
  public readonly type: string = RESET;

  // constructor(public payload: Counter) {}
}

export type Actions
  = DefaultAction
  | IncrementAction
  | DecrementAction
  | ResetAction;
