// * Title: grade-summary.component.ts
// * Author: Professor Krasso
// * Date: 15 August 2020
// * Modified: Joann Saeou
// * Description: grade-summary  component (typescript page)
// */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

// added two input values
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
