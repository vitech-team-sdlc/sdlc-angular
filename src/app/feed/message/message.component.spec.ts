import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {MessageComponent} from './message.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from "rxjs";
import {Message} from "../../domain/Message";
import {MessageService} from "../../rest-client/message.service";

describe('MessageComponent', () => {
  let component: MessageComponent;
  let messageService: MessageService;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    messageService = TestBed.inject(MessageService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should init data', fakeAsync(() => {
    spyOn(messageService, 'messageList').and.returnValue(of([new Message()]));
    fixture.detectChanges();

    tick(component.messagesRefreshPeriod);

    expect(messageService.messageList).toHaveBeenCalled();
    component.feedSubscription.unsubscribe();
  }));

});
