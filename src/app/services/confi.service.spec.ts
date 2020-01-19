import { TestBed } from '@angular/core/testing';

import { ConfiService } from './confi.service';

describe('ConfiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiService = TestBed.get(ConfiService);
    expect(service).toBeTruthy();
  });
});
