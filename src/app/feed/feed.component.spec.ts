import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MessageService } from '../rest-client/message.service';
import { User } from '../domain/User';
import { AuthConfigService } from '../auth/auth.config.service';
import { AuthConfigModule } from '../auth/auth.config.module';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let authConfigService: AuthConfigService;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AuthConfigModule],
      declarations: [FeedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    authConfigService = TestBed.inject(AuthConfigService);
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
    authConfigService.loggedUser.next(user);
    spyOn(messageService, 'postMessage').and.returnValue(of());

    component.postMessage(message);

    expect(messageService.postMessage).toHaveBeenCalledWith(user.id, message);
  });

});
