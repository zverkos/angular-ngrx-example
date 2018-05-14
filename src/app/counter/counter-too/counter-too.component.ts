import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterToo } from '../../shared/models/counter-too.models';
import { CounterTooService } from '../../shared/services/counter-too.service';

@Component({
  selector: 'app-counter-too',
  templateUrl: './counter-too.component.html',
  styleUrls: ['./counter-too.component.sass']
})
export class CounterTooComponent implements OnInit {
  public currentValue$: Observable<CounterToo>;

  constructor(
    private counterService: CounterTooService
  ) {
    this.currentValue$ = counterService.getCurrentValue();
  }

  public default(): void {
    this.counterService.default();
  }

  public increment(): void {
    this.counterService.increment();
  }

  public decrement(): void {
    this.counterService.decrement();
  }

  public reset(): void {
    this.counterService.reset();
  }

  ngOnInit() {}

}
