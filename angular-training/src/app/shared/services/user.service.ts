import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<boolean> {
    return this.http.post<boolean>(`/user/login`, user);
  }

  registration(user: User): Observable<boolean> {
    return this.http.post<boolean>(`/user/registration`, user);
  }

}
