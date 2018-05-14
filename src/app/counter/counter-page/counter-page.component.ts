import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from '../../shared/models/counter.models';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})

export class CounterPageComponent implements OnInit {
  public currentValue$: Observable<Counter>;

  constructor(
    private counterService: CounterService
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
