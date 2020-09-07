import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  @Output() messageSent = new EventEmitter<string>();
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  public send(): void {
    this.messageSent.emit(this.message);
    this.message = '';
  }

}
