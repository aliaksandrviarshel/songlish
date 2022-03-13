import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { UpdateWordModel } from '../models/update-word.model';
import { WordDetailsModel } from '../models/word-details.model';

@Component({
    selector: 'sng-word-expanded-tile',
    templateUrl: './word-expanded-tile.component.html',
    styleUrls: ['./word-expanded-tile.component.scss']
})
export class WordExpandedTileComponent implements OnInit {
    @Input()
    public set id(v: string) {
        this._id = v;
    }
    public get id(): string {
        return this._id;
    }
    private _id: string;

    @Input()
    public set details(v: WordDetailsModel) {
        if (!v || v.id !== this.id) {
            return;
        }

        this._details = v;
        this.translates = [...this.details.translates];
    }
    public get details(): WordDetailsModel {
        return this._details;
    }
    private _details: WordDetailsModel;

    @Output() cancel = new EventEmitter();

    @Output() save = new EventEmitter<UpdateWordModel>();

    constructor() { }

    ngOnInit(): void {
    }

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    isDirty = false;

    translates: string[];

    onTranslateRemove(translate: string): void {
        this.translates.splice(this.translates.indexOf(translate), 1);
        this.checkIsDirty();
    }

    onTranslateAdd($event: MatChipInputEvent): void {
        if (!($event.value || '').trim()) {
            $event.chipInput.clear();
            return;
        }

        if (this.translates.includes($event.value)) {
            $event.chipInput.clear();
            return;
        }

        if (!/^[а-яё\s-]+$/i.test($event.value)) {
            $event.chipInput.clear();
            return;
        }

        this.translates.push($event.value);
        $event.chipInput.clear();
        this.checkIsDirty();
    }

    onCancel(): void {
        this.reset();
        this.cancel.emit();
    }

    onSave(): void {
        this.save.emit(new UpdateWordModel({
            id: this.id,
            translates: this.translates,
        }))
    }

    private checkIsDirty() {
        return this.isDirty = this.details.id !== this.id || !this.equal(this.details.translates, this.translates);
    }

    private reset(): void {
        this.translates = [...this.details.translates];
        this.isDirty = false;
    }

    private equal(arr1: any[], arr2: any[]): boolean {
        return (arr1.length === arr2.length) && (arr1.every(val => arr2.includes(val)));
    }
}
