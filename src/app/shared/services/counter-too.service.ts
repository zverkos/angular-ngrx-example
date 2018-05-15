import { Injectable } from '@angular/core';
import { DefaultAction, IncrementAction, DecrementAction, ResetAction } from '../actions/counter-too.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterToo } from '../models/counter-too.models';

@Injectable()
export class CounterTooService {
  public store$;

  constructor(private store: Store<CounterToo>) {
    this.store$ = this.store.select('counterToo');
  }

  public getCurrentValue(): Observable<CounterToo> {
    return this.store$;
  }

  public default() {
    this.store$.dispatch(new DefaultAction());
  }

  public increment() {
    this.store$.dispatch(new IncrementAction());
  }

  public decrement() {
    this.store$.dispatch(new DecrementAction());
  }

  public reset() {
    this.store$.dispatch(new ResetAction());
  }
}
