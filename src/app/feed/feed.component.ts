import { Component, OnInit } from '@angular/core';
import { User } from '../domain/User';
import { MessageService } from '../rest-client/message.service';
import { AuthConfigService } from '../auth/auth.config.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private messageService: MessageService,
              private authConfigService: AuthConfigService
  ) {
  }

  ngOnInit(): void {
  }

  postMessage(message: string): void {
    this.authConfigService.loggedUser.subscribe((user: User) => {
      this.messageService.postMessage(user.id, message).subscribe();
    });
  }

}
