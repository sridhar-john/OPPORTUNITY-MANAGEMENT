import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor {
  
  BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }

 intercept(req,next){
   let tokenizedreq= req.clone({
     setHeaders: {
       Authorization: this.getToken()
     }
   })
   return next.handle(tokenizedreq);
 }
  checkUser()
  {
    return this.http.get(this.BASE_URL+"users",{responseType:'text' as 'json'});
  }
  getToken()
{
  return localStorage.getItem('token');
}

}
