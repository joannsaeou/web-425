/**
 * Title: composer.service.spec.ts
 * Author: Joann Saeou
 * Date: 29 July 2020
 * Description: Demonstrating  observables and observer composer service
 */



import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
