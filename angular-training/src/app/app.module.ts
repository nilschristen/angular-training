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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactivFormModule,
    SharedModule,
    NgbModule,
    InputOutputTransferModule,
    BrowserAnimationsModule,
    StepperModule,
    MatStepperModule,
    VideoPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
