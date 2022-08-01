import {Component, OnInit} from '@angular/core';
import {NgIfForService} from "../../services/ng-if-for.service";
import {StarwarsPeople} from "../../models/starwars-people.interface";
import {People} from "../../models/people.interface";

@Component({
  selector: 'app-ng-container-expample',
  templateUrl: './ng-if-for-example.component.html',
  styleUrls: ['./ng-if-for-example.component.scss']
})
export class NgIfForExampleComponent implements OnInit {
  interest = false;
  secondInterest = false;
  thirdInterest = false;
  starwarsPeople: People[];


  constructor(private ngIfForService: NgIfForService) {
  }

  ngOnInit(): void {
    this.ngIfForService.getStarwarsCharacters().subscribe((peoples: People[]) => {
      this.starwarsPeople = peoples;
      console.log(peoples);
    })
  }

  // Input output sind nicht reactive form, somit müsste man reactive form Login-Registration als reactive form hinterlegen
  // Texte schreiben


  changeInterest() {
    this.interest = !this.interest;
  }

  changeSecondInterest() {
    this.secondInterest = !this.secondInterest;
  }

  changeThirdInterest() {
    this.thirdInterest = !this.thirdInterest;
  }
}
