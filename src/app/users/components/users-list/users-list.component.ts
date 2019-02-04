import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../../shared/sdk/models/user.models';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
