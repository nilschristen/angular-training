import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-login',
  templateUrl: './reactive-form-login.component.html',
  styleUrls: ['./reactive-form-login.component.scss']
})
export class ReactiveFormLoginComponent implements OnInit {

  form: FormGroup;
  //username: string;
  //password: string;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
        username: new FormControl('', [Validators.required,]),
        password: new FormControl('', [Validators.required,]),
      }
    )
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  search() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).markAsTouched();
    });
    let formControl = this.form

    if (formControl.valid) {
      console.log('worked')
    }
  }
}
