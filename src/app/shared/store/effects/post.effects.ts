import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {
  GetAllPostsSuccess,
  GetAllPosts,
  PostActionsTypes
} from '../actions/post.action';
import {PostApi} from '../../sdk/services/post.service';

@Injectable()
export class PostEffects {
  constructor(
    private _postApi: PostApi,
    private _actions$: Actions
  ) {
  }

  @Effect()
  getPosts$ = this._actions$.pipe(
    ofType<GetAllPosts>(PostActionsTypes.GET_ALL_POSTS),
    switchMap(() => this._postApi.getAllPosts()),
    switchMap((Post: [any]) => of(new GetAllPostsSuccess(Post)))
  );
}
