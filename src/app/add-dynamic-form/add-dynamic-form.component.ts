import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validator } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-dynamic-form',
  templateUrl: './add-dynamic-form.component.html',
  styleUrls: ['./add-dynamic-form.component.css']
})
export class AddDynamicFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  skillArrayForm = this.formBuilder.array([
    this.formBuilder.control('')
  ])

  ngOnInit() {
  }

  add():void {
    
  }

}
