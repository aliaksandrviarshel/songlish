import { Component, Input, OnInit } from '@angular/core';
import { WordListItemModel } from '../../models/word-list-item.model';
import { WordLevelPipe } from '../../pipes/word-level.pipe';

@Component({
    selector: 'sng-word-list-tile',
    templateUrl: './word-list-tile.component.html',
    styleUrls: ['./word-list-tile.component.scss']
})
export class WordListTileComponent implements OnInit {
    @Input() model: WordListItemModel;

    constructor() { }

    ngOnInit(): void {
        // console.error(this.model);

    }

}
