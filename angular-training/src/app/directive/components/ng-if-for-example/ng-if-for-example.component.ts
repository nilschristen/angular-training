import {Component, OnInit} from '@angular/core';
import {DirectiveService} from "../../services/directive.service";
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
  peopleList: People[];

  constructor(private directiveService: DirectiveService) {
  }

  ngOnInit(): void {
    this.directiveService.getStarwarsCharacters().subscribe((peoples: People[]) => {
      this.peopleList = peoples;
    })
  }

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
