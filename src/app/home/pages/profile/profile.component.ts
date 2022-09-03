import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService,private _router:Router) { }

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
