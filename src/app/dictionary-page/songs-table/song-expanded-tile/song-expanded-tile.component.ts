import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongDetailsModel } from '../../models/song-details.model';
import { UpdateSongModel } from '../models/update-song.model';
import { WordMinModel } from './models/word-min.model';

@Component({
    selector: 'sng-song-expanded-tile',
    templateUrl: './song-expanded-tile.component.html',
    styleUrls: ['./song-expanded-tile.component.scss']
})
export class SongExpandedTileComponent implements OnInit {
    @Input()
    public set id(v: string) {
        this._id = v;
    }
    public get id(): string {
        return this._id;
    }
    private _id: string;

    @Input()
    public set details(v: SongDetailsModel) {
        if (!v || v.id !== this.id) {
            return;
        }

        this._details = v;
        this.learnedWords = [...this.details.learnedWords];
        this.unlearnedWords = [...this.details.unlearnedWords];
    }
    public get details(): SongDetailsModel {
        return this._details;
    }
    private _details: SongDetailsModel;

    @Output() cancel = new EventEmitter();

    @Output() save = new EventEmitter<UpdateSongModel>();

    constructor() { }

    ngOnInit(): void {
    }

    isDirty = false;

    unlearnedWords: WordMinModel[];

    learnedWords: WordMinModel[];

    drop(event: CdkDragDrop<WordMinModel[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }

        this.isDirty = this.details.id !== this.id
            || !this.equal(this.details.learnedWords, this.learnedWords)
            || !this.equal(this.details.unlearnedWords, this.unlearnedWords);
    }

    onCancel(): void {
        this.reset();
        this.cancel.emit();
    }

    onSave(): void {
        this.save.emit(new UpdateSongModel({
            id: this.id,
            unlearnedWordIds: this.unlearnedWords?.map(x => x.id),
            learnedWordIds: this.learnedWords?.map(x => x.id)
        }))
    }

    private reset(): void {
        this.learnedWords = [...this.details.learnedWords];
        this.unlearnedWords = [...this.details.unlearnedWords];
        this.isDirty = false;
    }

    private equal(arr1: any[], arr2: any[]): boolean {
        return (arr1.length === arr2.length) && (arr1.every(val => arr2.includes(val)));
    }
}
