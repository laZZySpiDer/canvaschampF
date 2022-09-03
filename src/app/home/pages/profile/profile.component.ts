import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserData } from 'src/app/models/user.profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,AfterContentInit {
  userDetails!:LoggedInUserData;
  constructor(private profileService:ProfileService,private _router:Router) { }
  ngAfterContentInit(): void {
    this.profileService.getLoggedInUserDetails().subscribe((response:LoggedInUserData)=>{
      this.userDetails = response;
    })
  }

  ngOnInit(): void {
  }


  logout(){
    this.profileService.updateLoggedInUserDetails({
      email : '',
      firstName : '',
      lastName : '',
      userId: 0,
      token: '',
      loggedIn: false
    });
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
