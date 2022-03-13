import { TestBed } from '@angular/core/testing';

import { WordTranslateTrainingPageResolver } from './word-translate-training-page.resolver';

describe('WordTranslateTrainingPageResolver', () => {
  let resolver: WordTranslateTrainingPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WordTranslateTrainingPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
