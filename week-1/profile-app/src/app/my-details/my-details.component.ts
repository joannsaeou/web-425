/**
 * Title: app.component.ts
 * Author: Joann Saeou
 * Date: 08 July 2020
 * Description: Demonstrating  App component Exercise 1.5 
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favFood: string;
  favColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];


  constructor(fullName: string, favFood: string, favColor: string) {

    this.fullName = fullName;
    this.favFood = favFood;
    this.favColor = favColor;

  }

  toString() {
  console.log(`\n  Full name: ${this.fullName}\n  Favorite Food: ${this.favFood} \n  Favorite color: ${this.favColor} `);
   }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Joann Saeou", "Curry", "Rainbow");
    this.myProfile.toString();
   }

  ngOnInit(): void {    // Define an ngOnInit() method to handle any additional initialization tasks.
  }

}
