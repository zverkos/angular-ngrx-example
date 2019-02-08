import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  GetAllPostsSuccess,
  GetAllPosts,
  PostActionsTypes,
  GetPostById,
  GetPostByIdSuccess,
  CreatePost,
  CreatePostSuccess
} from '../actions/post.action';
import {PostApi} from '../../sdk/services/post.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {selectPostById, selectPostsList} from '../selectors/post.selectors';
import {Post} from '../../sdk/models/post.models';
import 'rxjs-compat/add/operator/skip';
import 'rxjs-compat/add/operator/takeUntil';
import 'rxjs-compat/add/operator/map';

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
        map(payload => new GetAllPostsSuccess(payload))
      )
    )
  );
  // @Effect()
  // getPost$ = this._actions$.pipe(
  //   ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
  //   map(action => action.payload)
  // );

  @Effect()
  createPost$ = this._actions$.pipe(
    ofType<CreatePost>(PostActionsTypes.CREATE_POST),
    map(action => action.payload),
    switchMap((post: Post) =>
      this._postApi.createPost(post)
        .map(payload => new CreatePostSuccess(payload))));

  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPostById>(PostActionsTypes.GET_POST_BY_ID),
    map(action => action.payload),
    switchMap(id => {
      return this._postApi.getPostById(id).pipe(
        map(payload => new GetPostByIdSuccess(payload)));
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
