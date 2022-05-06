import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageAddUsersComponent } from './pages/page-add-users/page-add-users.component';
import { PageEditUsersComponent } from './pages/page-edit-users/page-edit-users.component';
import { PageRemoveUsersComponent } from './pages/page-remove-users/page-remove-users.component';


@NgModule({
  declarations: [
    PageAddUsersComponent,
    PageEditUsersComponent,
    PageRemoveUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
}) export class UsersModule { }
