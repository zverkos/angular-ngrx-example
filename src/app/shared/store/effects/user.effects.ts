import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';

import {IAppState} from '../states/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../sdk/services/user.service';
import { IUserHttp} from '../../sdk/models/http-models/user-http.models';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private _userService: UserService,
    private _store: Store<IAppState>
  ) {
  }

  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );
}
