import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  // to create a form field

  items: Array<IWishListItem>  = [];
  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  updateItemsHandler(item: IWishListItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }

}
