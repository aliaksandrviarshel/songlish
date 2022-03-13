import { Injectable } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { GetSongs } from '../songs-state/songs.actions';
import { GetWords } from '../words-state/words.actions';

@Injectable({
    providedIn: 'root'
})
export class DictionaryPageResolver implements Resolve<boolean> {
    constructor(private store: Store) { }

    resolve(): Observable<boolean> {
        this.store.dispatch([new GetSongs(), new GetWords()]);
        return of(true);
    }
}
