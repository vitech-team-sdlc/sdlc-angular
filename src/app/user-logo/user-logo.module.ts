import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLogoComponent} from './user-logo.component';


@NgModule({
  declarations: [UserLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [UserLogoComponent]
})
export class UserLogoModule {
}
