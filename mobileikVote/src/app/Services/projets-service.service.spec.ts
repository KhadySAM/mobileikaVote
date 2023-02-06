import { TestBed } from '@angular/core/testing';

import { ProjetsServiceService } from './projets-service.service';

describe('ProjetsServiceService', () => {
  let service: ProjetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
