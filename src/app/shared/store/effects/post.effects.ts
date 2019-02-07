import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  GetAllPostsSuccess,
  GetAllPosts,
  PostActionsTypes,
  GetPostById,
  GetPostByIdSuccess
} from '../actions/post.action';
import {PostApi} from '../../sdk/services/post.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {selectPostById, selectPostsList} from '../selectors/post.selectors';
import {Post} from '../../sdk/models/post.models';
import 'rxjs-compat/add/operator/skip';
import 'rxjs-compat/add/operator/takeUntil';

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
    switchMap(() =>
      this._postApi.getAllPosts().pipe(
        map(posts => new GetAllPostsSuccess(posts))
      )
    )
  );
  // @Effect()
  // getPost$ = this._actions$.pipe(
  //   ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
  //   map(action => action.payload)
  // );
  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
    map(action => action.payload),
    switchMap(id => {
      const nextPost$ = this._actions$.ofType(PostActionsTypes.GET_POST_BY_ID);
      return this._postApi.getPostById(id)
        .takeUntil(nextPost$)
        .map(post => new GetPostByIdSuccess(post));
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
