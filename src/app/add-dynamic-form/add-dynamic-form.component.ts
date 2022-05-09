import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-dynamic-form',
  templateUrl: './add-dynamic-form.component.html',
  styleUrls: ['./add-dynamic-form.component.css']
})
export class AddDynamicFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.myForm = this.formBuilder.group({
      name: [],
      skills: this.formBuilder.array([
        {
          name: this.formBuilder.control(null)
        }
      ])
    })
  }

  ngOnInit() {
  }

  getSkillsFormControls(): AbstractControl[] {
    return (<FormArray> this.myForm.get('skills')).controls
  }

  addSkill(): void {
    (this.myForm.get('skills') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  removeSkill(index) {
    (this.myForm.get('skills') as FormArray).removeAt(index);
  }

  send(values) {
    console.log(values);
  }

}
