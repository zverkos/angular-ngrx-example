import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../../shared/sdk/models/user.models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {}

  ngOnInit() {}
}
