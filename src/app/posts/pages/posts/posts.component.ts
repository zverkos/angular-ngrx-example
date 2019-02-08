import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectPostsList} from '../../../shared/store/selectors/post.selectors';
import {IAppState} from '../../../shared/store/states/app.state';
import {CreatePost, GetAllPosts} from '../../../shared/store/actions/post.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts$ = this._store.pipe(select(selectPostsList));

  constructor(
    private _store: Store<IAppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetAllPosts());
  }

  openPostById(id: number) {
    this.router.navigate(['/posts/', id]);
  }

  createPost(text: string) {
    this._store.dispatch(new CreatePost({'title': text, author: null, id: null}));
  }

}
