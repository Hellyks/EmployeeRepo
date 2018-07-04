import { TestBed, inject } from '@angular/core/testing';

import { SaveEmpDataService } from './save-emp-data.service';

describe('SaveEmpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveEmpDataService]
    });
  });

  it('should be created', inject([SaveEmpDataService], (service: SaveEmpDataService) => {
    expect(service).toBeTruthy();
  }));
});
