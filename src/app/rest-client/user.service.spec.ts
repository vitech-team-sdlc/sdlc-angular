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

  it('#current', () => {
    service.current().subscribe();

    const req = httpMock.expectOne(environment.baseUrl + '/users/current');
    expect(req.request.method).toEqual('GET');
    req.flush(new User());
    httpMock.verify();
  });

  it('#userList', () => {
    service.userList().subscribe();

    const req = httpMock.expectOne(environment.baseUrl + '/users');
    expect(req.request.method).toEqual('GET');
    req.flush(Array.of(new User()));
    httpMock.verify();
  });

});
