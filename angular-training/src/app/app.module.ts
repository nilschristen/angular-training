import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactivFormModule} from "./reactiv-form/reactiv-form.module";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputOutputTransferModule} from "./input-output-transfer/input-output-transfer.module";
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepperModule} from "./stepper/stepper.module";
import {MatStepperModule} from '@angular/material/stepper';
import {VideoPlayerModule} from "./video-player/video-player.module";


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'block',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message: 'By using our site, you acknowledge that you have read and understand our ',
    cookiePolicyLink: 'Cookie Policy',
    cookiePolicyHref: 'https://cookie.com',
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',
    tosLink: 'Terms of Service',
    tosHref: 'https://tos.com',
  }
};

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
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserAnimationsModule,
    StepperModule,
    MatStepperModule,
    VideoPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
