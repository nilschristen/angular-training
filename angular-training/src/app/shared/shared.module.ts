import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';



@NgModule({
  declarations: [
    ValidationErrorsComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
