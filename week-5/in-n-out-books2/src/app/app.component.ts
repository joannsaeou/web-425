/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 05 August 2020
 * Modified: Joann Saeou
 * Description: App module week 5 part2
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
    this.assignment = 'Exercise 5.3 = Navigation and Layout';
  }
  title = 'in-n-out-books';
}
