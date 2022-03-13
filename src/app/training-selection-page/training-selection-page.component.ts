import { Component, OnInit, ViewChild } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { GetTrainingData } from '../card-training-page/state/card-training.actions';
import { TrainingType } from './enum/training-type';
import { TrainingOptionsModel } from './models/training-options.model';
import { TrainingModes } from './training-mode-tile/enums/training-modes.enum';
import { TrainingModeModel } from './training-mode-tile/models/training-mode.model';

@Component({
    selector: 'sng-training-selection-page',
    templateUrl: './training-selection-page.component.html',
    styleUrls: ['./training-selection-page.component.scss']
})
export class TrainingSelectionPageComponent implements OnInit {
    @ViewChild('trainingModesRef') trainingModesRef: any;

    trainingModes: TrainingModeModel[] = [
        { name: 'Катрочки', description: 'Тренировка с контекстом в виде строк, в которых встречается слово', mode: TrainingModes.Cards },
        { name: 'Заполнение пропусков', description: 'Заполняйте пустые места в песне предложенными словами', mode: TrainingModes.FillDashes },
        { name: 'Слово-перевод', description: 'Тренировка с контекстом в виде строк, в которых встречается слово', mode: TrainingModes.WordTranslate }
    ];

    constructor(private store: Store) { }

    ngOnInit(): void {
    }

    // temp
    options = new TrainingOptionsModel({
        type: TrainingType.Cards
    });

    onStartTraining() {
        switch (this.getSelectedTrainingMode()) {
            case TrainingModes.Cards:
                this.store.dispatch(new Navigate(['/card-training']))
                break;

            default:
                break;
        }
    }

    private getSelectedTrainingMode(): TrainingModes {
        return this.trainingModesRef.selectedOptions.selected[0].value.mode;
    }
}
