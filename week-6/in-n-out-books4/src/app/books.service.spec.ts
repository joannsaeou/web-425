/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 05 August 2020
 * Modified: Joann Saeou
 * Description: Book service spec week 5
 */

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
