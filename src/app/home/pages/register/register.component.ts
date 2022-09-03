import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private toastr: ToastrService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  checkToastr(){
    this.toastr.success('Hello Toastr','Message');
  }


  get f(){
    return this.registrationForm.controls;
  }
}
