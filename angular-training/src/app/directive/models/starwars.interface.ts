import {People} from "./people.interface";

export interface Starwars {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
