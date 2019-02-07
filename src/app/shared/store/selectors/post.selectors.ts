import {createSelector} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {IPostState} from '../states/post.state';

const getPostsState = (state: IAppState) => state.posts;

export const selectPostsList = createSelector(getPostsState, (state: IPostState) => state.posts);

export const selectPostById = createSelector(getPostsState, (state: IPostState) => state.selectedPost);

