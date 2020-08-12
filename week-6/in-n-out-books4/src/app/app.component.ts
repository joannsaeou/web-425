/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 05 August 2020
 * Modified: Joann Saeou
 * Description: App module week 5 part3
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.2 - Input/Output Properties, part 1';
  }
  title = 'in-n-out-books';
}
