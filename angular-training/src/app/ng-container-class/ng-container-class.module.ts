import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIfForExampleComponent} from './components/ng-if-for-example/ng-if-for-example.component';
import {NgClassExampleComponent} from './components/ng-class-example/ng-class-example.component';
import {NgIfForService} from "./services/ng-if-for.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    NgIfForExampleComponent,
    NgClassExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgContainerClassModule {
}
