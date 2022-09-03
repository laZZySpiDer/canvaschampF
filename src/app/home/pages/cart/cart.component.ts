import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { LoggedInUserData } from 'src/app/models/user.profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,AfterContentInit {

  constructor(private profileService: ProfileService) { }

  ngAfterContentInit(): void {
    this.profileService.getLoggedInUserDetails()
    .subscribe((response:LoggedInUserData)=>{
      console.log(response)
      this.userDetails = response;
      if(response.loggedIn){
        this.userLoggedIn = true;
      }
    })
  }

  userLoggedIn:boolean = false;
  userDetails!:LoggedInUserData;
  ngOnInit(): void {
    
  }

}
