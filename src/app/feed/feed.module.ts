import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MessageInputComponent} from './message-input/message-input.component';
import {FeedComponent} from './feed.component';
import {UserLogoModule} from '../user-logo/user-logo.module';
import {FormsModule} from '@angular/forms';
import {HashtagPipe} from './hashtag.pipe';


@NgModule({
  declarations: [FeedComponent, MessageComponent, MessageInputComponent, HashtagPipe],
  imports: [
    CommonModule,
    UserLogoModule,
    FormsModule
  ]
})
export class FeedModule {
}
