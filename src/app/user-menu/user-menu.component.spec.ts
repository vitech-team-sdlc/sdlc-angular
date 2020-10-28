import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { AuthConfigService } from '../auth/auth.config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthConfigModule } from '../auth/auth.config.module';
import { Router } from '@angular/router';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let authConfigService: AuthConfigService;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AuthConfigModule],
      declarations: [ UserMenuComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    authConfigService = TestBed.inject(AuthConfigService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#userInRole', () => {
    const role = 'ADMIN';
    spyOn(authConfigService, 'hasRole').and.returnValue(true);
    component.userInRole(role);
    expect(authConfigService.hasRole).toHaveBeenCalledWith(jasmine.stringMatching(role));
  });

  it('#userMenuFeed', () => {
    component.userMenuFeed();
    expect(routerSpy.navigate.calls.mostRecent().args[0]).toMatch('/feed');
  });

  it('#userMenuUsers', () => {
    component.userMenuUsers();
    expect(routerSpy.navigate.calls.mostRecent().args[0]).toMatch('/users');
  });

  it('#userMenuLogout', fakeAsync(() => {
    spyOn(authConfigService, 'logout').and.callFake(() => Promise.resolve());
    component.userMenuLogout();
    flushMicrotasks();
    expect(authConfigService.logout).toHaveBeenCalled();
    expect(routerSpy.navigate.calls.mostRecent().args[0]).toMatch('/');
  }));
});
