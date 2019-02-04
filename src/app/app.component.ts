import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {IAppState} from './shared/store/states/app.state';
import {GetConfig} from './shared/store/actions/config.actions';
import {selectConfig} from './shared/store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  config$ = this._store.pipe(select(selectConfig));
  constructor(private _store: Store<IAppState>) {}
  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
