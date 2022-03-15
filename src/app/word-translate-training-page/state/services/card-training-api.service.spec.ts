import { TestBed } from '@angular/core/testing';

import { CardTrainingApiService } from './card-training-api.service';

describe('CardTrainingApiService', () => {
  let service: CardTrainingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTrainingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
