import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { CustomValidators } from './../../../providers/CustomValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]),
    lastName : new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]),
    emailId : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required])
  },
   CustomValidators.mustMatch('password','confirmPassword')
  );
  constructor(private toastr: ToastrService, private fb:FormBuilder,private loginService: LoginService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    // this.toastr.success('Hello Toastr','Message');
    if(this.registrationForm.invalid){
      this.toastr.error('Please resolve all Errors before Submitting','Register User');
      return;
    }
    let userData = {
      firstName: this.registrationForm.value.firstName,
      lastName:  this.registrationForm.value.lastName,
      email: this.registrationForm.value.emailId,
      password: this.registrationForm.value.password,
      phone:this.registrationForm.value.phoneNumber
    }
    console.log(this.registrationForm.value);
    this.loginService.registerUser(userData)
    .subscribe((response:any)=>{
      console.log(response);
      this.toastr.success('User Registered','Register User');
      this._router.navigate(['']);
    })
  }


  get f(){
    return this.registrationForm.controls;
  }
}
