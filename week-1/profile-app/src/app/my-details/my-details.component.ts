/**
 * Title: app.component.ts
 * Author: Joann Saeou
 * Date: 08 July 2020
 * Description: Demonstrating  App component Exercise 1.5 
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    // Define an ngOnInit() method to handle any additional initialization tasks.
  }

}
