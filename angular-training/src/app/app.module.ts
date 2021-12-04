import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactivFormModule} from "./reactiv-form/reactiv-form.module";
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InputOutputTransferModule} from "./input-output-transfer/input-output-transfer.module";
import {NgcCookieConsentModule} from 'ngx-cookieconsent';


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
    NgcCookieConsentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
