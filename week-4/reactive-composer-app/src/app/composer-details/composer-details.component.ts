/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 20 July 2020
 * Modified: Joann Saeou
 * Description: Composer details component (Composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

  //  inside constructor's parameter
export class ComposerDetailsComponent implements OnInit {


  composerId: number;
  composer: IComposer;

  // imported activatedroute and using the activatedroute to access the value
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);


    // to create an If statement to check if the composerID has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
