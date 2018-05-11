import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../counter.models';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})

export class CounterPageComponent implements OnInit {
  private currentValue$: Observable<CounterState>;

  constructor(
    private counterService: CounterService
  ) {
    this.currentValue$ = counterService.getCurrentValue();
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
