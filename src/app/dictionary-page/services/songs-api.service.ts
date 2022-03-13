import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { SongDetailsModel } from '../models/song-details.model';
import { SongListItemModel } from '../models/song-list-item.model';
import { WordMinModel } from '../songs-table/song-expanded-tile/models/word-min.model';

@Injectable({
    providedIn: 'root'
})
export class SongsApiService {
    constructor() { }

    getAll(): Observable<SongListItemModel[]> {
        return of(this.songs);
    }

    delete(id: string): Observable<number> {
        return of(1);
    }

    getDetails(id: string): Observable<SongDetailsModel> {
        return of(this.songDetails).pipe(delay(1000), map(x => new SongDetailsModel({ ...x, id: id })));
    }

    private readonly songs: SongListItemModel[] = [
        { id: '1', fullName: 'Broken Wings - Alter Bridge', name: 'Broken Wings', artist: 'Alter Bridge', unlearnedWordsCount: 5, wordsCount: 30 },
        { id: '2', fullName: 'Godsmack - Eye of The Storm', name: 'Godsmack', artist: 'Eye of The Storm', unlearnedWordsCount: 2, wordsCount: 26 },
        { id: '3', fullName: 'Dead Silence Hides My Cries - Guiding Light', name: 'Dead Silence Hides My Cries', artist: 'Guiding Light', unlearnedWordsCount: 5, wordsCount: 34 },
    ];

    private readonly songDetails = new SongDetailsModel({
        id: '1',
        unlearnedWords: [{ id: '1', foreign: 'cat' }, { id: '2', foreign: 'dog' }, { id: '3', foreign: 'alsdhglasdj' }],
        learnedWords: [{ id: '5', foreign: 'world' }, { id: '6', foreign: 'bruh' }, { id: '7', foreign: 'slovo' }]
    });
}
