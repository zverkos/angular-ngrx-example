import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../shared/sdk/models/post.models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.sass']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  @Output() editPost: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
