import { TestBed } from '@angular/core/testing';

import { PlanSelectionService } from './plan-selection.service';

describe('PlanSelectionService', () => {
  let service: PlanSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
