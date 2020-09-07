import {Component, OnInit} from '@angular/core';
import {UserService} from '../rest-client/user.service';
import {User} from '../domain/User';
import {MessageService} from '../rest-client/message.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  authenticateUser: User;

  constructor(private userService: UserService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.userService.user.subscribe((user: User) => {
      this.authenticateUser = user;
    });
  }

  postMessage(message: string): void {
    this.userService.user.subscribe(user => {
      this.messageService.postMessage(user.id, message).subscribe();
    });
  }

}
