import {PostActions, PostActionsTypes} from '../actions/post.action';
import {initialPostState, IPostState} from '../states/post.state';
import {Post} from '../../sdk/models';

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

    case PostActionsTypes.GET_POST_BY_ID: {
      return {
        ...state,
        selectedPost: null,
        selectedId: action.payload
      };
    }
    case PostActionsTypes.GET_POST_BY_ID_SUCCESS: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }

    case PostActionsTypes.CREATE_POST: {
      return {
        ...state,
        newPost: action.payload
      };
    }
    case PostActionsTypes.CREATE_POST_SUCCESS: {
      const newPost: Post =  action.payload;
      return {
        ...state,
        // ids: [ ...state.ids, newPost.id ],
        // posts: {...state.posts, [newPost.id]: newPost}
        posts: [...state.posts, newPost]
      };
    }

    default:
      return state;
  }
};
