import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';
import {PostComponent} from './pages/post/post.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  // {path: ':id/edit', component: PostComponent},
  {path: ':id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
