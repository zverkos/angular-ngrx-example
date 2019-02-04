import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserComponent} from './pages/user/user.component';
import {UsersComponent} from './pages/users/users.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UserComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent
  ]
})
export class UsersModule { }
