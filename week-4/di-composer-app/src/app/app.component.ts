
/**
 * Title: app.component.ts
 * Author: Joann Saeou
 * Date: 18 July 2020
 * Description: Demonstrating  about  component Exercise 2.4 Routing in Action
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency';
  title: string = 'composer-app';
}
