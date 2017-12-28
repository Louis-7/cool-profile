import { TestBed, inject } from '@angular/core/testing';

import { ThreeDrawService } from './three-draw.service';

describe('ThreeDrawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreeDrawService]
    });
  });

  it('should be created', inject([ThreeDrawService], (service: ThreeDrawService) => {
    expect(service).toBeTruthy();
  }));
});
