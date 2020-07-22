
/**
 * Title: composer-list.component.ts
 * Author: Joann Saeou
 * Date: 18 July 2020
 * Description: Demonstrating  about  component Exercise 2.4 Routing in Action
 */

// add import statement
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';




@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();   //created new instances for composer class

  }

  ngOnInit(): void {
  }

}


