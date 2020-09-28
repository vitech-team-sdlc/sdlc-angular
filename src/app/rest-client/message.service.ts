import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../domain/Message';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../domain/User';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private userService: UserService, private zone: NgZone) {
  }

  messageList(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(environment.baseUrl + '/messages');
  }

  postMessage(creatorId: number, message: string): Observable<any> {
    return this.http.post(environment.baseUrl + '/messages', {
      creatorId,
      message
    }, {headers: {'Content-Type': 'application/json'}});
  }

}
