import { TestBed } from '@angular/core/testing';

import { DetailEventServiceService } from './detail-event-service.service';

describe('DetailEventServiceService', () => {
  let service: DetailEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
