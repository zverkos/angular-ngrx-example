import {Component, OnInit} from '@angular/core';
import {GetAllPosts} from '../../shared/store/actions/post.action';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../shared/store/states/app.state';
import {selectPostsList} from '../../shared/store/selectors/post.selectors';
import {PostApi} from '../../shared/sdk/services/post.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  posts$ = this._store.pipe(select(selectPostsList));
  postsFromService$ = this.postApi.getAllPosts();

  constructor(
    private _store: Store<IAppState>,
    private postApi: PostApi
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetAllPosts());
  }

}
