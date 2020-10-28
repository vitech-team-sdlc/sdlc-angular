import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { AuthConfigModule } from '../auth/auth.config.module';
import { UserLogoModule } from '../user-logo/user-logo.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserLogoModule,
    AuthConfigModule
  ],
  exports: [UserMenuComponent]
})
export class UserMenuModule {
}
