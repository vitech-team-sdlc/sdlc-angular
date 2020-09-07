import {Component, Input, OnInit} from '@angular/core';
import {User} from '../domain/User';

@Component({
  selector: 'app-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.scss']
})
export class UserLogoComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
