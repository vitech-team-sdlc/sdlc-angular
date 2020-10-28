import { Component, OnInit } from '@angular/core';
import { UserService } from '../rest-client/user.service';
import { User } from '../domain/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.userList().subscribe((res) => {
      this.users = res;
    });

  }

}
