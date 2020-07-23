
/**
 * Title: app.component.ts
 * Author: Joann Saeou
 * Date: 22 July 2020
 * Description: Demonstrating  App component Exercise 1.5
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  message: string = 'Hello, You are now in Joann Saeou&#0039;s world!';
  assignment: string = 'Assignment 3.3 - Passing Data to Routes part 2';
  favFood: string = 'curry - Components';
  favColor: string = 'rainbow - Components';
}
