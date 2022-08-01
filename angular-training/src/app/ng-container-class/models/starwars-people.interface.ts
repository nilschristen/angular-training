import {People} from "./people.interface";

export interface StarwarsPeople {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
