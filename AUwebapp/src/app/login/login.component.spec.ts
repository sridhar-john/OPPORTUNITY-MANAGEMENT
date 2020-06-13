import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { UserService } from '../shared/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service : UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should contain one googlelogin button on the login page',()=>{
    const buttons =fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length>=1).toBeTruthy();
  });

  it('should contain one background image on the login page',()=>{
    const buttons =fixture.debugElement.queryAll(By.css('img'));
    expect(buttons.length>=1).toBeTruthy();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
