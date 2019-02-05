import {PostActionsTypes} from '../actions/post.action';
import {PostActions} from '../actions/post.action';
import {initialPostState, IPostState} from '../states/post.state';

export const postReducers = (
  state = initialPostState,
  action: PostActions
): IPostState => {
  switch (action.type) {
    case PostActionsTypes.GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      };
    }
    default: return state;
  }
};
