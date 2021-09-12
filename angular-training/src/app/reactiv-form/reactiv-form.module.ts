import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormLoginComponent } from './containers/reactive-form-login/reactive-form-login.component';
import { ReactiveFormRegistrationComponent } from './containers/reactive-form-registration/reactive-form-registration.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ReactiveFormLoginComponent,
        ReactiveFormRegistrationComponent
    ],
    exports: [
        ReactiveFormLoginComponent,
        ReactiveFormRegistrationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ReactivFormModule { }
