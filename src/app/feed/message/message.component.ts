import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {Message} from '../../domain/Message';
import {MessageService} from '../../rest-client/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  messages: Message[] = [];
  messagesRefreshPeriod = 1000;
  feedSubscription: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.feedSubscription = interval(this.messagesRefreshPeriod).subscribe(() => {
      this.messageService.messageList().subscribe((res) => {
        this.messages = res;
      });
    });
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }

}
