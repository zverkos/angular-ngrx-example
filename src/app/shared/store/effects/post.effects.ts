import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import {
  GetAllPostsSuccess,
  GetAllPosts,
  PostActionsTypes, GetPostById, GetPostByIdSuccess
} from '../actions/post.action';
import {PostApi} from '../../sdk/services/post.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {selectPostsList} from '../selectors/post.selectors';
import {Post} from '../../sdk/models/post.models';

@Injectable()
export class PostEffects {
  constructor(
    private _postApi: PostApi,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }

  @Effect()
  getPosts$ = this._actions$.pipe(
    ofType<GetAllPosts>(PostActionsTypes.GET_ALL_POSTS),
    switchMap(() => this._postApi.getAllPosts()),
    switchMap((Post: [any]) => of(new GetAllPostsSuccess(Post)))
  );
  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
    map(action => action.payload),
    switchMap((id) => this._postApi.getPostById(id)),
    switchMap((post: Post) => {
      return of(new GetPostByIdSuccess(post));
    })
  );
  // @Effect()
  // getPost$ = this._actions$.pipe(
  //   ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectPostsList))),
  //   switchMap(([id, posts]) => {
  //     const selectedPost = posts.filter(post => post.id === +id)[0];
  //     return of(new GetPostByIdSuccess(selectedPost));
  //   })
  // );
}
