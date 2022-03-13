import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Observable, of, tap } from 'rxjs';
import { Song } from '../models/song.model';
import { TextItem } from '../models/text-item.model';
import { TextLine } from '../models/text-line.model';
import { WordToAddModel } from '../models/word-to-add.model';
import { WordsApiService } from '../services/words-api.service';
import { GetDistinctWords, GetLines, GetSong, AddWord, RemoveWord, RemoveTranslate, AddTranslate } from './word-adding.actions';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { WordInfoModel } from '../models/word-info.model';

export class WordAddingStateModel {
    song: Song;
    words: TextItem[];
    lines: TextLine[];
    addedWords: WordToAddModel[]
}

const defaults = {
    song: null,
    words: [],
    lines: [],
    addedWords: []
};

@State<WordAddingStateModel>({
    name: 'wordAdding',
    defaults
})
@Injectable()
export class WordAddingState {
    constructor(private wordsApiService: WordsApiService) { }

    @Selector()
    static words(state: WordAddingStateModel): TextItem[] {
        return state.words;
    }

    @Selector()
    static lines(state: WordAddingStateModel): TextLine[] {
        return state.lines;
    }

    @Selector()
    static song(state: WordAddingStateModel): Song {
        return state.song;
    }

    @Selector()
    static addedWords(state: WordAddingStateModel): WordToAddModel[] {
        return state.addedWords;
    }

    @Action(GetSong)
    onGetSong({ patchState }: StateContext<WordAddingStateModel>, { songId }: GetSong): Observable<Song> {
        return this.wordsApiService.getSong(songId).pipe(
            tap(item => {
                patchState({
                    song: item
                })
            })
        );
    }

    @Action(GetDistinctWords)
    onGetDistinctWords({ patchState }: StateContext<WordAddingStateModel>, { songId }: GetDistinctWords): Observable<TextItem[]> {
        return this.wordsApiService.getDistinctWords(songId).pipe(
            tap(items => {
                patchState({
                    words: items
                })
            })
        );
    }

    @Action(GetLines)
    onGetLines({ patchState }: StateContext<WordAddingStateModel>, { songId }: GetLines): Observable<TextLine[]> {
        return this.wordsApiService.getLines(songId).pipe(
            tap(items => {
                patchState({
                    lines: items
                })
            })
        );
    }

    @Action(AddWord)
    onAddWord({ setState }: StateContext<WordAddingStateModel>, { wordId, foreign }: AddWord): Observable<WordInfoModel> {
        setState(
            patch({
                addedWords: append([{ foreign: foreign, isLoading: true }])
            })
        );

        return this.wordsApiService.getWordInfo(wordId).pipe(
            tap(x => {
                setState(
                    patch({
                        addedWords: updateItem<WordToAddModel>(x => x.foreign === foreign, patch<WordToAddModel>({ translates: append(x.translates), isLoading: false }))
                    })
                );
            })
        );
    }

    @Action(RemoveWord)
    // TODO: replace foreign with wordId when wordId become not hardcoded data
    onRemoveWord({ setState }: StateContext<WordAddingStateModel>, { foreign }: RemoveWord): void {
        setState(
            patch({
                addedWords: removeItem<WordToAddModel>(x => x.foreign === foreign)
            })
        );
    }

    @Action(RemoveTranslate)
    onRemoveTranslate({ setState }: StateContext<WordAddingStateModel>, { foreign, translate }: RemoveTranslate): void {
        setState(
            patch({
                addedWords: updateItem<WordToAddModel>(
                    x => x.foreign === foreign,
                    patch({
                        translates: removeItem<string>(x => x === translate)
                    })
                )
            })
        );
    }

    @Action(AddTranslate)
    onAddTranslate({ setState }: StateContext<WordAddingStateModel>, { foreign, translate }: AddTranslate): void {
        setState(
            patch({
                addedWords: updateItem<WordToAddModel>(
                    x => x.foreign === foreign,
                    patch({
                        translates: append([translate])
                    })
                )
            })
        );
    }
}
