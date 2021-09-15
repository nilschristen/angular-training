import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() errorKey: string;
  @Input() errorInfo: string;

  constructor() { }

  ngOnInit(): void {

  }

}
