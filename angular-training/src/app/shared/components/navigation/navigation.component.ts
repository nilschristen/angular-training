import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.interface";
import {UserRegistration} from "../../models/user-registration.interface";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  loginForm: FormGroup;
  registrationForm: FormGroup;

  errorKeys = [{key: 'required', label: 'required'}];

  constructor(private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginUsername: new FormControl('', [Validators.required,]),
      loginPassword: new FormControl('', [Validators.required,]),
    })

    this.registrationForm = new FormGroup({
        email: new FormControl('', [Validators.required,]),
        registrationUsername: new FormControl('', [Validators.required,]),
        registrationPassword: new FormControl('', [Validators.required,]),
        repeatpassword: new FormControl('', [Validators.required,])
      }
    )
  }

  submitLogin() {
    Object.keys(this.loginForm.controls).forEach((key: string) => {
      this.loginForm.get(key).markAsTouched();
    });
    let formControl = this.loginForm

    if (formControl.valid) {
      const user = {
        username: this.loginForm.get('loginUsername').value,
        password: this.loginForm.get('loginPassword').value
      } as User;
      this.userService.login(user).subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          // localStorage.setItem('user', String(user.to));
          this.toastr.success('Logged in');
          //display name instead of login and logout button
        } else {
          this.toastr.error('Password or Username are wrong');
        }
      });
    }
  }

  submitRegistration() {
    Object.keys(this.registrationForm.controls).forEach((key: string) => {
      this.registrationForm.get(key).markAsTouched();
    });
    let formControl = this.registrationForm

    if (formControl.valid) {
      //todo repeat password und password must be the same

      const registrationUser = {
        username: this.registrationForm.get('registrationUsername').value,
        password: this.registrationForm.get('registrationPassword').value,
        email: this.registrationForm.get('email').value
      } as UserRegistration;
      this.userService.registration(registrationUser).subscribe((registered: boolean) => {
        if (registered) {
          const user = {
            username: this.registrationForm.get('registrationUsername').value,
            password: this.registrationForm.get('registrationPassword').value
          } as User;
          this.userService.login(user).subscribe((loggedIn: boolean) => {
            if (loggedIn) {
              this.toastr.success('Logged in')
              //display name instead of login and logout button
            }
          })
        }
        else {
          this.toastr.warning('Be sure you filled every Field with the correct data', 'Signe up failed')
        }

      });
    }
  }

}
