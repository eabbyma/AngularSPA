import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavoratorComponent } from '../User/favorator.component';
import { ReviewsComponent } from '../User/reviews.component';
import { EditProfileComponent } from '../User/edit-profile.component';


@NgModule({
  declarations: [
    FavoratorComponent,
    ReviewsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
