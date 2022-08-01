import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/containers/home/home.component";
import {ChildComponent} from "./input-output-transfer/containers/child/child.component";
import {
  ReactiveFormRegistrationComponent
} from "./reactiv-form/containers/reactive-form-registration/reactive-form-registration.component";
import {ReactiveFormLoginComponent} from "./reactiv-form/containers/reactive-form-login/reactive-form-login.component";
import {ParentComponent} from "./input-output-transfer/containers/parent/parent.component";
import {StepperComponent} from "./stepper/containers/stepper/stepper.component";
import {VideoPlayerComponent} from "./video-player/containers/video-player/video-player.component";
import {NgIfForExampleComponent} from "./ng-container-class/components/ng-if-for-example/ng-if-for-example.component";

const routes: Routes = [
  {path: '', redirectTo: 'ui/home', pathMatch: 'full'},
  {
    path: 'ui',
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'input', component: ChildComponent},
      {path: 'output', component: ParentComponent},
      {path: 'login', component: ReactiveFormLoginComponent},
      {path: 'registration', component: ReactiveFormRegistrationComponent},
      {path: 'stepper', component: StepperComponent},
      {path: 'video', component: VideoPlayerComponent},
      {path: 'ngif-ngfor', component: NgIfForExampleComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

