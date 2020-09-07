import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../rest-client/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.auth().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
