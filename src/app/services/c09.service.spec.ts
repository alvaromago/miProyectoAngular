import { TestBed } from '@angular/core/testing';

import { C09Service } from './c09.service';

describe('C09Service', () => {
  let service: C09Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C09Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
