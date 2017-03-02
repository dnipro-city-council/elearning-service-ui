import { TestBed, inject } from '@angular/core/testing';
import { TrainingsService } from './trainings.service';

describe('TrainingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingsService]
    });
  });

  it('should ...', inject([TrainingsService], (service: TrainingsService) => {
    expect(service).toBeTruthy();
  }));
});
