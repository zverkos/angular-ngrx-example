import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../../../shared/sdk/models/post.models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent implements OnInit {
  @Input() posts: Post[];

  constructor() {
  }

  ngOnInit() {
  }

}
