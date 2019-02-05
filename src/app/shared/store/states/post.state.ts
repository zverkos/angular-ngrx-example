import {Post} from '../../sdk/models/post.models';

export interface IPostState {
  posts: Post[];
}

export const initialPostState: IPostState = {
  posts: null
};
