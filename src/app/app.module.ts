import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeedModule} from './feed/feed.module';
import {AuthConfigModule} from './auth/auth.config.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeedModule,
    UserModule,
    AppRoutingModule,
    AuthConfigModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
