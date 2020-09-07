import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../rest-client/user.service';

/**
 * Guard to protect routes.
 */
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuth = !!this.userService.user.getValue();

    if (isAuth) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
