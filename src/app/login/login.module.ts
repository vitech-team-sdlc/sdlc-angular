import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {RestClientModule} from '../rest-client/rest-client.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RestClientModule
  ]
})
export class LoginModule { }
