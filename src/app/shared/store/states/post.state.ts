import {Post} from '../../sdk/models/post.models';

export interface IPostState {
  posts: Post[];
  selectedPost: Post;
}

export const initialPostState: IPostState = {
  posts: null,
  selectedPost: null
};
