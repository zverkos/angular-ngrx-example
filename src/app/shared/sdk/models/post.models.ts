export interface IPost {
  'id'?: number;
  'title'?: string;
  'author'?: number;
}

export class Post implements IPost {
  'id': number;
  'title': string;
  'author': number;

  constructor(data?: IPost) {
    Object.assign(this, data);
  }
}
