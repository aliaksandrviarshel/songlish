import { Component, Input, OnInit } from '@angular/core';
import { SongListItemModel } from '../../models/song-list-item.model';

@Component({
    selector: 'sng-song-list-tile',
    templateUrl: './song-list-tile.component.html',
    styleUrls: ['./song-list-tile.component.scss']
})
export class SongListTileComponent implements OnInit {
    @Input()
    public set model(v: SongListItemModel) {
        // console.error(v);

        this._model = v;
    }
    public get model(): SongListItemModel {
        return this._model;
    }
    private _model: SongListItemModel;

    constructor() { }

    ngOnInit(): void {
    }

}
