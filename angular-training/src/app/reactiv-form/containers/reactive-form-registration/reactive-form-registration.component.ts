import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-registration',
  templateUrl: './reactive-form-registration.component.html',
  styleUrls: ['./reactive-form-registration.component.scss']
})
export class ReactiveFormRegistrationComponent implements OnInit {
  form: FormGroup;
  //firstname: string;
  //lastname: string;
  //email: string;
  //birthday: Date;
  //username: string;
  //password: string;
  //repeatpassword: string;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required,]),
      lastname: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required,]),
      birthday: new FormControl('', [Validators.required,]),
      username: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
      repeatpassword: new FormControl('', [Validators.required,])
      }
    )
  }


  get firstname(){
    return this.form.get('firstname');
  }

  get lastname(){
    return this.form.get('lastname');
  }

  get email(){
    return this.form.get('email');
  }

  get birthday() {
    return this.form.get('birthday');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get repeatpassword() {
    return this.form.get('repeatpassword');
  }

  submit() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).markAsTouched();
    });
    let formControl = this.form

    if (formControl.valid) {
      console.log('worked')
    }
  }
}
