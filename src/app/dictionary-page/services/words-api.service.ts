import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WordListItemModel } from '../models/word-list-item.model';
import { WordDetailsModel } from '../words-table/models/word-details.model';

@Injectable({
    providedIn: 'root'
})
export class WordsApiService {
    constructor() { }

    getAll(): Observable<WordListItemModel[]> {
        return of(this.words);
    }

    getDetails(id: string): Observable<WordDetailsModel> {
        return of(this.wordDetails);
    }

    private readonly words: WordListItemModel[] = [
        { id: '1', foreign: 'cat', knowledgeLevel: 2, level: 1 },
        { id: '2', foreign: 'dog', knowledgeLevel: 0, level: 0 },
        { id: '3', foreign: 'bird', knowledgeLevel: 1, level: 3 },
        { id: '4', foreign: 'world', knowledgeLevel: 1, level: 4 },
        { id: '5', foreign: 'lskjdghsdlrjhgl', knowledgeLevel: 0, level: 5 },
        { id: '6', foreign: 'cock', knowledgeLevel: 2, level: 0 },
        { id: '7', foreign: 'mouse', knowledgeLevel: 2, level: 3 },
    ]

    private readonly wordDetails = new WordDetailsModel({ id: '1', translates: ['кот', 'кошка'] })
}
