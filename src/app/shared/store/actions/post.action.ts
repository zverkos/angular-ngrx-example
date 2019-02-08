import {Action} from '@ngrx/store';

import {Post} from '../../sdk/models';

export enum PostActionsTypes {
  GET_ALL_POSTS = '[Post] Get All Posts',
  GET_ALL_POSTS_SUCCESS = '[Post] Get All Posts Success',
  CREATE_POST = '[Post] Create Post',
  CREATE_POST_SUCCESS = '[Post] Create Post Success',
  GET_POST_BY_ID = '[Post] Get Post By Id',
  GET_POST_BY_ID_SUCCESS = '[Post] Get Post By Id Success',
  UPDATE_POST = '[Post] Update Post',
  UPDATE_POST_SUCCESS = '[Post] Update Post Success',
  DELETE_POST_BY_ID = '[Post] Delete Post By Id',
  DELETE_POST_BY_ID_SUCCESS = '[Post]Delete Post By Id Success'
}

export class GetAllPosts implements Action {
  public readonly type = PostActionsTypes.GET_ALL_POSTS;
}

export class GetAllPostsSuccess implements Action {
  public readonly type = PostActionsTypes.GET_ALL_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class CreatePost implements Action {
  public readonly type = PostActionsTypes.CREATE_POST;
  constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
  public readonly type = PostActionsTypes.CREATE_POST_SUCCESS;
  constructor(public payload: Post) {}
}

export class GetPostById implements Action {
  public readonly type = PostActionsTypes.GET_POST_BY_ID;
  constructor(public payload: number) {}
}

export class GetPostByIdSuccess implements Action {
  public readonly type = PostActionsTypes.GET_POST_BY_ID_SUCCESS;
  constructor(public payload: Post) {}
}

export type PostActions =
  | GetAllPosts
  | GetAllPostsSuccess
  | CreatePost
  | CreatePostSuccess
  | GetPostById
  | GetPostByIdSuccess;
