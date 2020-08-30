/**
 * Title: book-details-dialog.component.ts
 * Author: Professor Krasso
 * Date: 28 August  2020
 * Modified: Joann Saeou
 * Description: book-details-dialog component (ts page)
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
