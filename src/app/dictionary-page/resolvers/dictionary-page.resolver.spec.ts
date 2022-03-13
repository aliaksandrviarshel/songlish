import { TestBed } from '@angular/core/testing';

import { DictionaryPageResolver } from './dictionary-page.resolver';

describe('DictionaryPageResolver', () => {
  let resolver: DictionaryPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DictionaryPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
