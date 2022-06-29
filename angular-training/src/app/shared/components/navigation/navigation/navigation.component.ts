import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  loginForm: FormGroup;
  registrationForm: FormGroup;

  errorKeys = [{key: 'required', label: 'required'}];

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginUsername: new FormControl('', [Validators.required,]),
      loginPassword: new FormControl('', [Validators.required,]),
    })

    this.registrationForm = new FormGroup({
        firstname: new FormControl('', [Validators.required,]),
        lastname: new FormControl('', [Validators.required,]),
        email: new FormControl('', [Validators.required,]),
        birthday: new FormControl('', [Validators.required,]),
        registrationUsername: new FormControl('', [Validators.required,]),
        registrationPassword: new FormControl('', [Validators.required,]),
        repeatpassword: new FormControl('', [Validators.required,])
      }
    )
  }

  submitLogin() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.get(key).markAsTouched();
    });
    let formControl = this.loginForm

    if (formControl.valid) {
      console.log('Login worked')
    }
  }

  submitRegistration() {
    Object.keys(this.registrationForm.controls).forEach((key) => {
      this.registrationForm.get(key).markAsTouched();
    });
    let formControl = this.registrationForm

    if (formControl.valid) {
      console.log('Registration worked')
    }
  }

}
