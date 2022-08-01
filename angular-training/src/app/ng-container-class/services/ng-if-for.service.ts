import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StarwarsPeople} from "../models/starwars-people.interface";
import {map, take} from "rxjs/operators";
import {People} from "../models/people.interface";

@Injectable({
  providedIn: 'root'
})
export class NgIfForService {

  BASE_URI = `https://swapi.dev/api/`

  constructor(private http: HttpClient) {
  }

  getStarwarsCharacters(): Observable<People[]> {
    return this.http.get<StarwarsPeople>(`${this.BASE_URI}people`).pipe(
      map((starwarspeople) => starwarspeople.results));
  }
}
