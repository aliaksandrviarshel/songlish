import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { GetPopularSongs } from '../state/song.actions';

@Injectable({
    providedIn: 'root'
})
export class SearchPageResolver implements Resolve<boolean> {
    constructor(private store: Store) { }

    resolve(): Observable<boolean> {
        this.store.dispatch(new GetPopularSongs());

        return of(true);
    }
}
