import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {of, Subscription} from "rxjs";
import {ValidationErrorKey} from "../../models/validation-error-key";

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() errorKeys: ValidationErrorKey[];

  changeSubscription: Subscription = null;

  key: string = null;
  label: string = null;

  constructor() {
  }

  ngOnInit(): void {
    this.changeSubscription = this.control.statusChanges.subscribe((() => this.setError()));
    this.setError();
  }

  ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

  setError(): void {
    this.key = null
    this.label = null
    if (this.control && this.control.errors){
      for (const errorKey of this.errorKeys){
        if (this.control.errors[errorKey.key]){
          this.key= errorKey.key;
          this.label= errorKey.label;
          break;
        }
      }
    }
  }
}
