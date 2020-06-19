import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check user is Authenticated',() =>{
     
    service.checkUser().subscribe(data=>{
      console.log(data);
      expect(data).toEqual("Login sucessfull and User is Authenticated");
    });
  });

  
  it('Should Check Auth Data', () => {
    service.getToken();
    expect(localStorage.getItem('token')).toEqual(null);
});



});
