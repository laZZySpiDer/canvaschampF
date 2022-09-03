import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoggedInUserData } from 'src/app/models/user.profile.model';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterContentInit {

  constructor(private loginService:LoginService,private toastr: ToastrService,private _router:Router,private profileService: ProfileService) { }
  email:string = '';
  password:string = '';
  userDetails!:LoggedInUserData;
  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
    this.profileService.getLoggedInUserDetails()
    .subscribe((response:LoggedInUserData)=>{
      this.userDetails = response;
      if(response.loggedIn){
        this._router.navigate(['/profile']);
      }
    })
  }

  loginEvent(){
    this.loginService.loginUser(this.email,this.password)
    .subscribe((response:any)=>{
      console.log(response);
      if(response.status === 200){
        this.toastr.success(`Welcome ${response.user.firstName} ${response.user.lastName}`,'Login Success');
        this.profileService.updateLoggedInUserDetails(<LoggedInUserData>{
          ...response.user,
          loggedIn : true
        });
        localStorage.setItem('userObject',JSON.stringify({
          ...response.user,
          loggedIn : true
        }));
        this._router.navigate(['']);
      }else{
        this.toastr.error(response.message,'Login Error');
      }
    },
    (error:Error)=>{
      this.toastr.error(error.message,'Login Error');
    })
  }
}
