import {createSelector} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {IPostState} from '../states/post.state';

const selectPosts = (state: IAppState) => state.posts;

export const selectPostsList = createSelector(
  selectPosts,
  (state: IPostState) => state.posts
);

