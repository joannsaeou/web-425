import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDetailsDialogComponent } from './repair-details-dialog.component';

describe('RepairDetailsDialogComponent', () => {
  let component: RepairDetailsDialogComponent;
  let fixture: ComponentFixture<RepairDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
