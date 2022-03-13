import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { WordAddingState } from './word-adding.state';

describe('WordAdding actions', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([WordAddingState])]
        }).compileComponents();
        store = TestBed.get(Store);
    }));

});
