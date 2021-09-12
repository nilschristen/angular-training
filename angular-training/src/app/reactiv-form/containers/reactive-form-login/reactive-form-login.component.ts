import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-login',
  templateUrl: './reactive-form-login.component.html',
  styleUrls: ['./reactive-form-login.component.scss']
})
export class ReactiveFormLoginComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
        username: new FormControl("", [Validators.required,]),
        password: new FormControl("", [Validators.required,]),
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
    console.log(this.form.value);
    console.log("worked")
  }
}
