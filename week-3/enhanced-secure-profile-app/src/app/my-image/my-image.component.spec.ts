/**
 * Title:my-image.component.spec.ts
 * Author: Joann Saeou
 * Date: 30 August 2020
 * Description:fixing code attribution
 */


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
