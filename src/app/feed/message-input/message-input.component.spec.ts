import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageInputComponent} from './message-input.component';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#sent', () => {
    spyOn(component.messageSent, 'emit');
    const value = 'message';
    component.message = value;

    component.send();

    expect(component.messageSent.emit).toHaveBeenCalledWith(value);
    expect(component.message).toEqual('');
  });

});
