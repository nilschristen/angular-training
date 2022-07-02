import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidationErrorsComponent} from './components/validation-errors/validation-errors.component';
import {ValidationErrorComponent} from './components/validation-error/validation-error.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


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
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
