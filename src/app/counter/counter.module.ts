import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { CounterService } from '../shared/services/counter.service';
import { CounterTooService } from '../shared/services/counter-too.service';
import { CounterTooComponent } from './counter-too/counter-too.component';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  declarations: [CounterPageComponent, CounterTooComponent],
  providers: [
    CounterService,
    CounterTooService
  ]
})
export class CounterModule { }
