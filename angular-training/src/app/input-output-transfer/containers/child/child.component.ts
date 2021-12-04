import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BmiModel} from "../../models/bmi-model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  form: FormGroup;
  bmiModel: BmiModel
  errorKeys = [{key: 'required', label: 'required'}];
  prentFlag: boolean;

  constructor() {}


  ngOnInit(): void {
    this.prentFlag = false;
    this.resetForm();
    this.form = new FormGroup({
      height: new FormControl('',[Validators.required]),
      weight:new FormControl('',[Validators.required])
    });
  }

  resetForm() {
   this.bmiModel =  {
     height : 0,
     weight : 0
    }
  }

  submit() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).markAsTouched();
    });
    let formControl = this.form
    if (formControl.valid) {
      this.bmiModel.height = formControl.value.height
      this.bmiModel.weight = formControl.value.weight
      this.prentFlag = true;
      console.log(this.bmiModel)
    }
    else{
      console.log('something went wrong')
    }
  }
}
