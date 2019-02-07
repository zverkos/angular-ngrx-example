import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../states/app.state';
import {configReducers} from './config.redusers';
import {userReducers} from './user.redusers';
import {postReducers} from './post.redusers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers,
  posts: postReducers
};
