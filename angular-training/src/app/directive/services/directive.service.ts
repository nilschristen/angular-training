import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Starwars} from "../models/starwars.interface";
import {map} from "rxjs/operators";
import {People} from "../models/people.interface";

@Injectable({
  providedIn: 'root'
})
export class DirectiveService {

  BASE_URI = `https://swapi.dev/api/`

  constructor(private http: HttpClient) {
  }

  getStarwarsCharacters(): Observable<People[]> {
    return this.http.get<Starwars>(`${this.BASE_URI}people`).pipe(
      map((starwars: Starwars) => starwars.results));
  }
}
