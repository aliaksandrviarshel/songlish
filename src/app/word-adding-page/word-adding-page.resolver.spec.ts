import { TestBed } from '@angular/core/testing';

import { WordAddingPageResolver } from './resolvers/word-adding-page.resolver';

describe('WordAddingPageResolver', () => {
    let resolver: WordAddingPageResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(WordAddingPageResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
