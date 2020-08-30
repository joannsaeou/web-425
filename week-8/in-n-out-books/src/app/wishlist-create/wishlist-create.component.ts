//  /**
//  * Title: wishlist-create.component.ts
//  * Author: Professor Krasso
//  * Date: 28 August  2020
//  * Modified: Joann Saeou
//  * Description: wishlist create component (typescript page)
//  */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
  }

  ngOnInit(): void {
  }

  // to add a new function here
  // tslint:disable-next-line:typedef
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });

    this.item = {} as IWishListItem;
  }


}
