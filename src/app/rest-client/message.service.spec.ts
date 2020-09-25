import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {Message} from '../domain/Message';
import {HttpRequest} from '@angular/common/http';

describe('MessageService', () => {
  let service: MessageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MessageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#messageList', done => {
    service.messageList().subscribe((res) => {
      expect(res.length).toEqual(2);
      done();
    });

    const result = httpMock.expectOne((request: HttpRequest<any>) => {
      return request.method === 'GET'
        && request.url === environment.baseUrl + '/messages';
    });
    result.flush([new Message(), new Message()]);
  });

  it('#postMessage', done => {
    const creatorId = 1;
    const message = 'message';

    service.postMessage(creatorId, message).subscribe((res) => {
      expect(res).toBeTruthy();
      done();
    });

    const result = httpMock.expectOne((request: HttpRequest<any>) => {
      return request.method === 'POST'
        && request.url === environment.baseUrl + '/messages'
        && JSON.stringify(request.body) === JSON.stringify({
          creatorId,
          message
        });
    });
    result.flush({});
  });*/

});
