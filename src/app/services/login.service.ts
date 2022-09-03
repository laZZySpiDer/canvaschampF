import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  mainAPI:string = 'https://innovative-backend.herokuapp.com';	

  loginUser(email:string,password:string){
    return this.http.post(`${this.mainAPI}/unsecure/login`,{
      email : email,
      password : password
    })
  }


  registerUser(userDetails:any){
    return this.http.post(`${this.mainAPI}/unsecure/register`,
      userDetails
    )
  }
}
