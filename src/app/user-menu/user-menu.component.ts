import { Component, OnInit } from '@angular/core';
import { User } from '../domain/User';
import { AuthConfigService } from '../auth/auth.config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  currentUser: User;

  constructor(
    private readonly router: Router,
    private readonly authConfigService: AuthConfigService
  ) {
  }

  ngOnInit(): void {
    this.authConfigService.loggedUser.subscribe((user: User) => {
      this.currentUser = user;
    });
  }

  public userInRole(role): boolean {
    return this.authConfigService.hasRole(role);
  }

  public userMenuFeed(): void {
    this.router.navigate(['/feed']);
  }

  public userMenuUsers(): void {
    this.router.navigate(['/users']);
  }

  public userMenuProfile(): void {
    window.open(this.authConfigService.authConfig.issuer + '/account/', '_blank');
  }

  public userMenuLogout(): void {
    this.authConfigService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }

}
