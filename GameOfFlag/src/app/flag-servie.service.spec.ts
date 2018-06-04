import { TestBed, inject } from '@angular/core/testing';

import { FlagServieService } from './flag-servie.service';

describe('FlagServieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlagServieService]
    });
  });

  it('should be created', inject([FlagServieService], (service: FlagServieService) => {
    expect(service).toBeTruthy();
  }));
});
