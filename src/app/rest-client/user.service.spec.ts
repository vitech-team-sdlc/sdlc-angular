import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {User} from '../domain/User';
import {environment} from '../../environments/environment';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#auth', () => {
    service.auth().subscribe();

    const req = httpMock.expectOne(environment.baseUrl + '/users/auth');
    expect(req.request.method).toEqual('GET');
    req.flush(new User());
    httpMock.verify();
  });

});
