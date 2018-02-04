import { TestBed, inject } from '@angular/core/testing';

import { S2aService } from './s2a.service';

describe('S2aService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S2aService]
    });
  });

  it('should be created', inject([S2aService], (service: S2aService) => {
    expect(service).toBeTruthy();
  }));
});
