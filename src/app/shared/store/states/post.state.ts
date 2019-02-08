import {Post} from '../../sdk/models';

export interface IPostState {
  ids: number[];
  // posts: { [id: number]: Post };
  posts: Post[];
  selectedPost: Post;
  selectedId: number;
  newPost: Post;
}

export const initialPostState: IPostState = {
  ids: null,
  posts: null,
  selectedPost: null,
  selectedId: null,
  newPost: null
};
