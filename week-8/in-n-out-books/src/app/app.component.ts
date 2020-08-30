/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 28 August 2020
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
    this.assignment = 'Welcome to In-N-Out-Books';
  }
  title = 'in-n-out-books';
}
