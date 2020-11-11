import {Injectable} from '@angular/core';
import {AuthConfig, NullValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {filter} from 'rxjs/operators';
import {User} from '../domain/User';
import {UserService} from '../rest-client/user.service';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthConfigService {

  loggedUser = new BehaviorSubject<User>(null);
  identityClaims = new BehaviorSubject<object>(null);

  private decodedAccessToken: any;
  private decodedIDToken: any;

  constructor(
    public readonly authConfig: AuthConfig,
    private readonly oauthService: OAuthService,
    private readonly userService: UserService
  ) {
  }

  async initAuth(): Promise<any> {
    return new Promise((resolveFn, rejectFn) => {
      // setup oauthService
      this.oauthService.configure(this.authConfig);
      this.oauthService.setStorage(sessionStorage);
      this.oauthService.tokenValidationHandler = new NullValidationHandler();

      // subscribe to token events
      this.oauthService.events
        .pipe(filter((e: any) => {
          return e.type === 'token_received';
        }))
        .subscribe(() => this.handleNewToken());

      // continue initializing app or redirect to login-page
      this.oauthService.loadDiscoveryDocumentAndLogin().then(isLoggedIn => {
        if (isLoggedIn) {
          this.oauthService.setupAutomaticSilentRefresh();
          this.login();
          resolveFn();
        } else {
          this.oauthService.initCodeFlow();
          rejectFn();
        }
      });

    });
  }

  public hasRole(role): boolean {
    if (!this.identityClaims || this.identityClaims.getValue() === null) {
      return false;
    }
    return this.identityClaims.getValue()['realm_access']['roles'].includes(role);
  }

  async logout(): Promise<any> {
    return new Promise(() => this.oauthService.logOut());
  }

  private login(): void {
    this.userService.current().subscribe((res: User) => {
      this.identityClaims.next(this.oauthService.getIdentityClaims());
      this.loggedUser.next(res);
    });
  }

  private handleNewToken(): void {
    this.decodedAccessToken = this.oauthService.getAccessToken();
    this.decodedIDToken = this.oauthService.getIdToken();
  }

}
