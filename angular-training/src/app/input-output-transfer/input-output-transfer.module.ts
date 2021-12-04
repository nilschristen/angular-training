import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './containers/child/child.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ParentComponent} from "./containers/parent/parent.component";


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  exports: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class InputOutputTransferModule { }
