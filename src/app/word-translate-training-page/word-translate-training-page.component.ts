import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WordKnowledgeLevel } from './enums/word-knowledge-level';
import { SongLinesModel } from './models/song-lines.model';
import { WordCardModel } from './models/word-card.model';
import { ChangeWordKnowledgeLevel, GetTrainingData, SetSongLines } from './state/card-training.actions';
import { CardTrainingState } from './state/card-training.state';

@Component({
    selector: 'sng-word-translate-training-page',
    templateUrl: './word-translate-training-page.component.html',
    styleUrls: ['./word-translate-training-page.component.scss']
})
export class WordTranslateTrainingPageComponent implements OnInit {
    @Select(CardTrainingState.cards) cards$: Observable<WordCardModel[]>;

    @Select(CardTrainingState.songLinesModels) songLinesModels$: Observable<SongLinesModel[]>;

    @Select(CardTrainingState.currentWord) currentWord$: Observable<WordCardModel>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        // may be pass into resolver and pass data to it
        this.store.dispatch(new GetTrainingData(null));
    }

    onCardIndexChanged(index: any) {
        this.store.dispatch(new SetSongLines(index));
    }

    onLevelChanged($event: WordKnowledgeLevel): void {
        this.store.dispatch(new ChangeWordKnowledgeLevel($event));
    }
}
