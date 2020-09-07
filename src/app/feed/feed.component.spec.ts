import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {UserService} from '../rest-client/user.service';
import {MessageService} from '../rest-client/message.service';
import {User} from '../domain/User';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let userService: UserService;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FeedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#postMessage', () => {
    const user = new User();
    user.id = 1;
    const message = 'message';
    userService.user.next(user);
    spyOn(messageService, 'postMessage').and.returnValue(of());

    component.postMessage(message);

    expect(messageService.postMessage).toHaveBeenCalledWith(user.id, message);
  });

});
