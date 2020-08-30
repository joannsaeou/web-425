/**
 * Title: book-details-dialog.component.ts
 * Author: Professor Krasso
 * Date: 28 August  2020
 * Modified: Joann Saeou
 * Description: book-details-dialog component (ts page)
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IBook } from '../book.interface';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
