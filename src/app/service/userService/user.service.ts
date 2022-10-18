import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

Registration(data:any){
  console.log(data)
  let header = {
    headers:new HttpHeaders({
    'Content-type':'application/json'
    })
    }
    return this.http.postservice('/user/register/', data,false,header)
  }

  Login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    console.log(header)
    return this.http.postservice("/user/login/",data,false,header)
  }

  ForgotPassword(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    console.log(header)
    return this.http.postservice("/user/forgot_password/send_email/",data,false,header)
  }
}
