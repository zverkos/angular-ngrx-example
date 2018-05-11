import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterPageComponent } from './counter-page/counter-page.component';

const routes: Routes = [
  {path: 'counter', component: CounterPageComponent},
  {path: '**', component: CounterPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
