import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs';
import { CardDataModel } from '../models/card-data.model';
import { SongLinesModel } from '../models/song-lines.model';
import { WordCardModel } from '../models/word-card.model';
import { ChangeWordKnowledgeLevel, GetTrainingData, SetSongLines } from './card-training.actions';
import { CardTrainingApiService } from './services/card-training-api.service';

export class CardTrainingStateModel {
    public cardDatas: CardDataModel[]
    public cards: WordCardModel[];
    public songLinesModels: SongLinesModel[];
    public currentWord: WordCardModel;
}

const defaults: CardTrainingStateModel = {
    cardDatas: [],
    cards: [],
    songLinesModels: [],
    currentWord: null
};

@State<CardTrainingStateModel>({
    name: 'cardTraining',
    defaults
})
@Injectable()
export class CardTrainingState {
    @Selector()
    static cardDatas(state: CardTrainingStateModel): CardDataModel[] {
        return state.cardDatas;
    }

    @Selector()
    static cards(state: CardTrainingStateModel): WordCardModel[] {
        return state.cards;
    }

    @Selector()
    // TODO: rename
    static songLinesModels(state: CardTrainingStateModel): SongLinesModel[] {
        return state.songLinesModels;
    }

    @Selector()
    static currentWord(state: CardTrainingStateModel): WordCardModel {
        return state.currentWord;
    }

    constructor(private cardTrainingApiService: CardTrainingApiService) { }

    @Action(GetTrainingData)
    onGetTrainingData({ setState }: StateContext<CardTrainingStateModel>, { options }: GetTrainingData) {
        return this.cardTrainingApiService.getTrainingData(options).pipe(
            tap(item => {
                setState({
                    cardDatas: item.cardDatas,
                    cards: item.cardDatas.map(x => x.card),
                    songLinesModels: item.cardDatas[0].songLinesModels,
                    currentWord: item.cardDatas[0].card
                });
            })
        )
    }

    @Action(SetSongLines)
    onSetSongLines({ getState, patchState }: StateContext<CardTrainingStateModel>, { cardIndex }: SetSongLines) {
        const { cardDatas } = getState();

        patchState({
            songLinesModels: cardDatas[cardIndex].songLinesModels,
            currentWord: cardDatas[cardIndex].card
        })
    }

    @Action(ChangeWordKnowledgeLevel)
    onChangeWordKnowledgeLevel({ setState, getState }: StateContext<CardTrainingStateModel>, { level }: ChangeWordKnowledgeLevel) {
        const { currentWord } = getState();

        setState(
            patch({
                cardDatas: updateItem<CardDataModel>(x => x.card.foreign == currentWord.foreign,
                    patch({
                        card: { ...currentWord, knowledgeLevel: level }
                    }))
            })
        )
    }
}
