import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-login',
  templateUrl: './reactive-form-login.component.html',
  styleUrls: ['./reactive-form-login.component.scss']
})
export class ReactiveFormLoginComponent implements OnInit {

  form!: FormGroup;
  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
    this.form = new FormGroup({
      username : new FormControl(this.username, [Validators.required, Validators.minLength(1)]),
      password : new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
      }
    )
  }

  search() {
    console.log("worked")
  }
}
