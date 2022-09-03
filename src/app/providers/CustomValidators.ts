import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    FormGroup,
    ValidationErrors
  } from '@angular/forms';
  
  export class CustomValidators {
    constructor() {}
    static mustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: AbstractControl): ValidationErrors | null => {
        const control = formGroup.get(controlName);
        const matchingControl = formGroup.get(matchingControlName);
  
        if (matchingControl?.errors && !matchingControl.errors.mustMatch) {
          return null;
        }
  
        // set error on matchingControl if validation fails
        if (control?.value !== matchingControl?.value) {
          matchingControl?.setErrors({ mustMatch: true });
        } else {
          matchingControl?.setErrors(null);
        }
        return null;
      };
    }
  }