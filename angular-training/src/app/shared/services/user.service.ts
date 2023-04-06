import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.interface";
import {UserRegistration} from "../models/user-registration.interface";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  BASE_URI = `http://localhost:8080/user`;

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.BASE_URI}/login`, user);
  }

  logout(){
    sessionStorage.removeItem('user');
  }

  registration(user: UserRegistration): Observable<boolean> {
    return this.http.post<boolean>(`${this.BASE_URI}/registration`, user);
  }
}
