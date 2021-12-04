import {Component, Input, OnInit} from '@angular/core';
import {BmiModel} from "../../models/bmi-model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input() bmiModel: BmiModel;

  constructor() { }

  ngOnInit(): void {
    this.calculateBmi();
  }

  calculateBmi(){
    let weight = this.bmiModel.weight;
    let height = this.bmiModel.height/ 100 * 2;

    this.bmiModel.bmi = weight / height;
  }
}
