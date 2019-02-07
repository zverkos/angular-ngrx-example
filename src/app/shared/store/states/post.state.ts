import {Post} from '../../sdk/models/post.models';

export interface IPostState {
  posts: Post[];
  selectedId: number;
}

export const initialPostState: IPostState = {
  posts: null,
  selectedId: null
};
