import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './pages/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PostsComponent, PostsListComponent, PostComponent, PostDetailsComponent, EditPostComponent, CreatePostComponent]
})
export class PostsModule { }
