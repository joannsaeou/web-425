import { TestBed } from '@angular/core/testing';

import { RepairsService } from './repair.service';

describe('RepairService', () => {
  let service: RepairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
