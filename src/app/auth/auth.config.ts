import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://keycloak.35.195.151.253.nip.io/auth/realms/mood-feed',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id
  // The SPA is registered with this id at the auth-server
  clientId: environment.production ? 'mood-feed-staging' : 'mood-feed-local',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC.
  scope: 'openid profile email',

  // Remove the requirement of using Https to simplify the demo
  // THIS SHOULD NOT BE USED IN PRODUCTION
  // USE A CERTIFICATE FOR YOUR IDP
  // IN PRODUCTION
  requireHttps: false,

  // at_hash is not present in JWT token
  showDebugInformation: true,
  disableAtHashCheck: true,
};

export class OAuthModuleConfig {
  resourceServer: OAuthResourceServerConfig = {sendAccessToken: false};
}

export class OAuthResourceServerConfig {
  /**
   * Urls for which calls should be intercepted.
   * If there is an ResourceServerErrorHandler registered, it is used for them.
   * If sendAccessToken is set to true, the access_token is send to them too.
   */
  allowedUrls?: Array<string>;
  sendAccessToken = true;
  customUrlValidation?: (url: string) => boolean;
}
