import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './pages/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, PostsListComponent, PostComponent, PostDetailsComponent]
})
export class PostsModule { }
