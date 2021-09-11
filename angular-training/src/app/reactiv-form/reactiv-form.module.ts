import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormLoginComponent } from './containers/reactive-form-login/reactive-form-login.component';
import { ReactiveFormRegistrationComponent } from './containers/reactive-form-registration/reactive-form-registration.component';



@NgModule({
    declarations: [
        ReactiveFormLoginComponent,
        ReactiveFormRegistrationComponent
    ],
    exports: [
        ReactiveFormLoginComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ReactivFormModule { }
