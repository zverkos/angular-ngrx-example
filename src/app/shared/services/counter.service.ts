import { Injectable } from '@angular/core';
import { DefaultAction, IncrementAction, DecrementAction, ResetAction } from '../actions/counter.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Counter } from '../models/counter.models';

@Injectable()
export class CounterService {
  public store$;

  constructor(private store: Store<Counter>) {
    this.store$ = this.store.select('counter');
  }

  public getCurrentValue(): Observable<Counter> {
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
