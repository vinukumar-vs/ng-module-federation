import { TestBed } from '@angular/core/testing';

import { LibUtilsService } from './lib-utils.service';

describe('LibUtilsService', () => {
  let service: LibUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
