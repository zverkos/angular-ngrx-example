import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../../shared/sdk/models/post.models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent implements OnInit {
  @Input() posts: Post[];
  @Output() id: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
