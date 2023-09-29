import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import redirectUrl from '../constants/redirect';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(public formBuilder: FormBuilder) {
    }

  form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // Add more form fields and validation rules as needed
   });


    submitForm(){
    }

    redirect(){
        window.location.href = redirectUrl();
      }

}
