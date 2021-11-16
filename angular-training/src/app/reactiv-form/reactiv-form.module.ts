import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormLoginComponent } from './containers/reactive-form-login/reactive-form-login.component';
import { ReactiveFormRegistrationComponent } from './containers/reactive-form-registration/reactive-form-registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";



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
        ReactiveFormsModule,
        SharedModule,
        NgbDatepickerModule
    ]
})
export class ReactivFormModule { }
