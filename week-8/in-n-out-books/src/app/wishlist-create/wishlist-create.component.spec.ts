//  /**
//  * Title: wishlist-create.component.spec.ts
//  * Author: Professor Krasso
//  * Date: 28 August  2020
//  * Modified: Joann Saeou
//  * Description: wishlist create component (spec ts page)
//  */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
