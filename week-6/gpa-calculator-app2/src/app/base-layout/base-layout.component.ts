/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 15 August 2020
 * Modified: Joann Saeou
 * Description: base-layout  component (base page)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4- Input Properties';
  }

  ngOnInit(): void {
  }

}
