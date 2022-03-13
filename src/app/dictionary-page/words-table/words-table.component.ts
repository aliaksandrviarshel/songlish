import { Component, Input } from '@angular/core';
import { WordListItemModel } from '../models/word-list-item.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WordsState } from '../words-state/words.state';
import { WordDetailsModel } from './models/word-details.model';
import { GetWordDetails } from '../words-state/words.actions';

@Component({
    selector: 'sng-words-table',
    templateUrl: './words-table.component.html',
    styleUrls: ['./words-table.component.scss'],
})
export class WordsTableComponent {
    @Select(WordsState.details) details$: Observable<WordDetailsModel>;

    @Input()
    public items: WordListItemModel[];

    @Input()
    public filterValue: string;

    constructor(private store: Store) { }

    columns: string[] = ['foreign']

    onGetDetails(id: string) {
        this.store.dispatch(new GetWordDetails(id));
    }

    onCancel(): void { }

    onSave($event): void {
        alert($event.learnedWordIds)
    }
}
