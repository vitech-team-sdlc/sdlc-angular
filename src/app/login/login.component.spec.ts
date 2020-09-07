import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {Router, RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../rest-client/user.service';
import {of} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(
        [
          {path: '', component: LoginComponent}
        ]
      ), HttpClientTestingModule],
      declarations: [LoginComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#login', () => {
    spyOn(userService, 'auth').and.returnValue(of({}));
    spyOn(router, 'navigate');

    component.login();

    expect(userService.auth).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

});
