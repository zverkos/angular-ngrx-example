import {RouterReducerState} from '@ngrx/router-store';

import {IUserState, initialUserState} from './user.state';
import {IConfigState, initialConfigState} from './config.state';
import {initialPostState, IPostState} from './post.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
  posts: IPostState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  posts: initialPostState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
