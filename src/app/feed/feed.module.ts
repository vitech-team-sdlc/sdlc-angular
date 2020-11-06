import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {FeedComponent} from './feed.component';
import {UserLogoModule} from '../user-logo/user-logo.module';
import {FormsModule} from '@angular/forms';
import {HashtagPipe} from './hashtag.pipe';
import {UserMenuModule} from '../user-menu/user-menu.module';
import {AuthConfigModule} from '../auth/auth.config.module';


@NgModule({
  declarations: [FeedComponent, MessageComponent, MessageInputComponent, HashtagPipe],
  imports: [
    CommonModule,
    UserLogoModule,
    UserMenuModule,
    AuthConfigModule,
    FormsModule
  ]
})
export class FeedModule {
}
