
/**
 * Title: composer-list.component.ts
 * Author: Joann Saeou
 * Date: 18 July 2020
 * Description: Demonstrating  about  component Exercise 2.4 Routing in Action
 */

// add import statement
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';




@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {

    this.composers = this.composerService.getComposers(); // dependency injection

  }

  ngOnInit(): void {
  }

}


