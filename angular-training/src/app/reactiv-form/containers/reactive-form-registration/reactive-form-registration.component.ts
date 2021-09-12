import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-registration',
  templateUrl: './reactive-form-registration.component.html',
  styleUrls: ['./reactive-form-registration.component.scss']
})
export class ReactiveFormRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log('worked')
  }
}
