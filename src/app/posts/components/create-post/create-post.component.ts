import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})
export class CreatePostComponent implements OnInit {
  newPostText: FormControl = new FormControl('');
  @Output() sendPost: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
