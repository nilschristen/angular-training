import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';



@NgModule({
  declarations: [
    ValidationErrorsComponent,
    ValidationErrorComponent,
    NavigationComponent
  ],
    exports: [
        ValidationErrorComponent,
        ValidationErrorsComponent,
        NavigationComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
