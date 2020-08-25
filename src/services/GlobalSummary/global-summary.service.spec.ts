import { TestBed } from '@angular/core/testing';

import { GlobalSummaryService } from './global-summary.service';

describe('GlobalSummaryService', () => {
  let service: GlobalSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
