/**
 * Title: signin.component.ts
 * Author: Professor Krasso
 * Date: 23 July 2020
 * Modified: Joann Saeou
 * Description: signin component (signin page)
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // this will appear when user clicks the button 
  signin() {
   this.isLoggedIn = true;
   this.router.navigate(['../home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
