import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';
import { WordListItemModel } from '../models/word-list-item.model';
import { WordsApiService } from '../services/words-api.service';
import { WordDetailsModel } from '../words-table/models/word-details.model';
import { GetWordDetails, GetWords } from './words.actions';

export class WordsStateModel {
    public items: WordListItemModel[];
    public details: WordDetailsModel;
}

const defaults = {
    items: [],
    details: null
};

@State<WordsStateModel>({
    name: 'words',
    defaults
})
@Injectable()
export class WordsState {
    constructor(private wordsApiService: WordsApiService) { }

    @Selector()
    static items(state: WordsStateModel): WordListItemModel[] {
        return state.items;
    }

    @Selector()
    static details(state: WordsStateModel): WordDetailsModel {
        return state.details;
    }

    @Action(GetWords)
    onGetWords({ patchState }: StateContext<WordsStateModel>) {
        return this.wordsApiService.getAll().pipe(
            tap(items => {
                patchState({ items: items });
            })
        )
    }

    @Action(GetWordDetails)
    onGetWordDetails({ patchState }: StateContext<WordsStateModel>, { id }: GetWordDetails) {
        return this.wordsApiService.getDetails(id).pipe(
            tap(item => {
                patchState({ details: item });
            })
        )
    }
}
