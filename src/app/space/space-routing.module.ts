import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MegaComponent} from './mega/mega.component';

const routes: Routes = [
  {path: '', component: MegaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
