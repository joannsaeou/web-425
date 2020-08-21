//  /**
//  * Title: grade-summary.component.ts
//  * Author: Professor Krasso
//  * Date: 15 August 2020
//  * Modified: Joann Saeou
//  * Description: grade-summary  component (ts page)
//  */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// list of variables of type FormGroup
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  // tslint:disable-next-line:no-inferrable-types
  gpaTotal: number = 0;
  transcriptForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  get form() { return this.transcriptForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });
    event.currentTarget.reset();
  }


  // tslint:disable-next-line:typedef
  calculateResults() {
    // tslint:disable-next-line:no-inferrable-types
    let gpa: number = 0;

    for (const entry of this.transcriptEntries) {
      console.log(entry.grade);
      switch (entry.grade) {
        case 'A':
          console.log('its an A');
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  // tslint:disable-next-line:typedef
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
