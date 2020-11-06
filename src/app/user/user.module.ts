import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserMenuModule } from '../user-menu/user-menu.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserMenuModule
  ]
})
export class UserModule {
}
