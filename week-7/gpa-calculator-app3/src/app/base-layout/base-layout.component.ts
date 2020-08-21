/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 15 August 2020
 * Modified: Joann Saeou
 * Description: base-layout  component (base page)
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA -Calculator';
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);

  }

}
