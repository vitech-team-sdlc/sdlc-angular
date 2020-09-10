import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../domain/User';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  auth(): Observable<any> {
    return this.http.get(environment.baseUrl + '/users/auth').pipe(map((res: User) => {
      this.user.next(res);
    }))
  }

}
