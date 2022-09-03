import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInUserData } from '../models/user.profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private userLoginData$: BehaviorSubject<LoggedInUserData> = new BehaviorSubject<LoggedInUserData>({
    email : '',
    firstName : '',
    lastName : '',
    userId: 0,
    token: '',
    loggedIn: false
  });


  constructor() {
    if(!!localStorage.getItem('userObject')){
      console.log('ABC')
      this.updateLoggedInUserDetails(
        <LoggedInUserData>JSON.parse(
          <string>localStorage.getItem('userObject')
        )
      );
    }
  }


  updateLoggedInUserDetails(userData:LoggedInUserData){
    this.userLoginData$.next(userData);
  }


  getLoggedInUserDetails() : Observable<any>{
    return this.userLoginData$.asObservable();
  }
}
