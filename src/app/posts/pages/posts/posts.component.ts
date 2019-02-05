import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {selectPostsList} from '../../../shared/store/selectors/post.selectors';
import {IAppState} from '../../../shared/store/states/app.state';
import {GetAllPosts} from '../../../shared/store/actions/post.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts$ = this._store.pipe(select(selectPostsList));

  constructor(
    private _store: Store<IAppState>
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetAllPosts());
    // this.posts$.subscribe(console.log);
  }

}
