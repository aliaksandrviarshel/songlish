import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { GetLines, GetSong } from '../state/word-adding.actions';

@Injectable({
    providedIn: 'root'
})
export class WordAddingPageResolver implements Resolve<boolean> {
    constructor(private store: Store) { }

    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
        if (!route.paramMap.get('id')) {
            return of(false);
        }

        const songId = route.paramMap.get('id');
        this.store.dispatch([new GetLines(songId), new GetSong(songId)]);
        return of(true);
    }
}
