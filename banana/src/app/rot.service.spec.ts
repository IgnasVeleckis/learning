import { TestBed } from '@angular/core/testing';

import { RotService } from './rot.service';

describe('RotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RotService = TestBed.get(RotService);
    expect(service).toBeTruthy();
  });
});
