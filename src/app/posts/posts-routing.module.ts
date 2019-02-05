import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  // {path: ':id', component: PostCo}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
