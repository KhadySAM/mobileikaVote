import { TestBed } from '@angular/core/testing';

import { CriteresServiceService } from './criteres-service.service';

describe('CriteresServiceService', () => {
  let service: CriteresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
