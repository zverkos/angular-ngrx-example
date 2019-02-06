import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectPostById} from '../../../shared/store/selectors/post.selectors';
import {IAppState} from '../../../shared/store/states/app.state';
import {GetPostById} from '../../../shared/store/actions/post.action';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  post$ = this._store.pipe(select(selectPostById));
  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetPostById(this._route.snapshot.params.id));
    this.post$.subscribe(console.log);
  }

}
