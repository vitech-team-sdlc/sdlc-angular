import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { AuthConfigService } from './auth.config.service';
import { authConfig, OAuthModuleConfig } from './auth.config';
import { environment } from '../../environments/environment';

export function init_app(authConfigService: AuthConfigService): any {
  return () => authConfigService.initAuth();
}

@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.baseUrl], // << only URL where we will send our access token to
        sendAccessToken: true
      }
    })
  ],
  providers: [
    AuthConfigService,
    { provide: AuthConfig, useValue: authConfig },
    OAuthModuleConfig,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ AuthConfigService ], multi: true }
  ]
})
export class AuthConfigModule { }
