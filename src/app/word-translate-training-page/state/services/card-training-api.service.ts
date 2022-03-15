import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrainingOptionsModel } from 'src/app/training-selection-page/models/training-options.model';
import { WordKnowledgeLevel } from '../../enums/word-knowledge-level';
import { CardTrainingDataModel } from '../../models/card-training-data.model';

@Injectable({
    providedIn: 'root'
})
export class CardTrainingApiService {
    constructor() { }

    getTrainingData(options: TrainingOptionsModel): Observable<CardTrainingDataModel> {
        return of(this.cardTrainingData);
    }

    private readonly cardTrainingData = new CardTrainingDataModel({
        cardDatas: [
            {
                card: { foreign: 'cat', translates: ['кот', 'кошка'], knowledgeLevel: WordKnowledgeLevel.Low },
                songLinesModels: [
                    {
                        songName: 'Broken Wings',
                        performer: 'Alter Bridge',
                        lines: [
                            'bruh duh cat tac lil',
                            'cat duh cat tac lil',
                            'duh cat tic toc'
                        ]
                    },
                    {
                        songName: 'Bulletproof',
                        performer: 'Godsmack',
                        lines: [
                            'bruh cat duh cat tac lil',
                            'cat duh tac lil',
                            'duh cat cat tic toc'
                        ]
                    },
                ]
            },
            {
                card: { foreign: 'cock', translates: ['петух'], knowledgeLevel: WordKnowledgeLevel.Medium },
                songLinesModels: [
                    {
                        songName: 'Meine Kleine',
                        performer: 'Hui s gori',
                        lines: [
                            'bruh duh cat tac lil',
                        ]
                    },
                    {
                        songName: 'Bulletproof',
                        performer: 'Godsmack',
                        lines: [
                            'bruh cat duh cat tac lil',
                            'cat duh tac lil',
                        ]
                    },
                ]
            }
        ],
    });
}
