/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 7 July 2020
; Modified By: Joann Saeou
; Description:  Demonstrates  how to use TypeScript
;===========================================
*/

import { Component } from '@angular/core';   /* to import from file @angular/core in node module   */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Joann Saeou's World!";      /* to output the message  in HTML in browser */
}


