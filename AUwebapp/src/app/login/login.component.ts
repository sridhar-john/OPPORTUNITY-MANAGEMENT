import { Component, OnInit, ViewChild, ElementRef ,NgZone} from '@angular/core';

import {Router} from '@angular/router';
import { User } from '../User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth2: any;
  public name:any;
  user:User;

  imgurl:string;
  username:string;
  email:string;
  userid:string;
  token:string;
 
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
 
  constructor(public _router: Router,private service: UserService,private ngZone: NgZone) {
         this.user=new User();
   }
 
  ngOnInit() {
 
   this.googleSDK();
  }


 
  prepareLoginButton() 
  {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
  
        
        this.imgurl=profile.getImageUrl();
        this.username=profile.getName();
        this.email= profile.getEmail();
        this.userid=profile.getId();
        this.token=googleUser.getAuthResponse().id_token;
       

        
        localStorage.setItem('token',this.userid);
        localStorage.setItem('username',this.username);
        localStorage.setItem('email',this.email);
        localStorage.setItem('img',this.imgurl);
        
         let resp=this.service.checkUser();
         
         resp.subscribe(result => this.ngZone.run(() =>{
           console.log(result)
            if(result === "Login sucessfull and User is Authenticated")
            {
              localStorage.setItem('login',"loggedIn");
             this._router.navigateByUrl("/opportunity");
            }
            else
            {
             this._router.navigateByUrl("/login");    
            }
        
      },(error) => {
        alert(JSON.stringify(error, undefined, 2));
      }));
 
    });

  }
  googleSDK() 
  {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '447243278135-une39aofm0e0f5luu9vubl53h02om6hm.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }
 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  
  }

  
}

  

