import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../domain/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  current(): Observable<any> {
    return this.http.get(environment.baseUrl + '/users/current');
  }

  userList(): Observable<Array<User>> {
    return this.http.get<Array<User>>(environment.baseUrl + '/users');
  }

}
