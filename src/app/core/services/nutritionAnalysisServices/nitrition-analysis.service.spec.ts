import { TestBed } from '@angular/core/testing';

import { NutritionAnalysisService } from './nitrition-analysis.service';

describe('NutritionAnalysisService', () => {
  let service: NutritionAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
