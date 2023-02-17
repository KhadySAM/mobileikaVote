import { TestBed } from '@angular/core/testing';

import { ConnexionVotantService } from './connexion-votant.service';

describe('ConnexionVotantService', () => {
  let service: ConnexionVotantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionVotantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
