import { Component, Input, OnInit } from '@angular/core';
import { TrainingModeModel } from './models/training-mode.model';

@Component({
    selector: 'sng-training-mode-tile',
    templateUrl: './training-mode-tile.component.html',
    styleUrls: ['./training-mode-tile.component.scss']
})
export class TrainingModeTileComponent implements OnInit {
    @Input() mode: TrainingModeModel;

    constructor() { }

    ngOnInit(): void {
    }

}
