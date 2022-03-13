import { TestBed } from '@angular/core/testing';

import { SearchPageResolver } from './search-page.resolver';

describe('SearchPageResolver', () => {
    let resolver: SearchPageResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(SearchPageResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
