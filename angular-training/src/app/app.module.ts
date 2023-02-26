import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactivFormModule} from "./reactiv-form/reactiv-form.module";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputOutputTransferModule} from "./input-output-transfer/input-output-transfer.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepperModule} from "./stepper/stepper.module";
import {MatStepperModule} from '@angular/material/stepper';
import {VideoPlayerModule} from "./video-player/video-player.module";
import {HomeModule} from "./home/home.module";
import {DirectiveModule} from "./directive/directive.module";
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import {TodoModule} from "./todo/todo.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ReactivFormModule,
    SharedModule,
    NgbModule,
    InputOutputTransferModule,
    BrowserAnimationsModule,
    StepperModule,
    MatStepperModule,
    VideoPlayerModule,
    DirectiveModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
