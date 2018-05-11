import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { CounterService } from './counter.service';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  declarations: [CounterPageComponent],
  providers: [
    CounterService
  ]
})
export class CounterModule { }
