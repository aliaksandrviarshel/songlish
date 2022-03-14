import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObserverComponent } from 'src/app/+shared/abstract/observer-component';
import { WordKnowledgeLevel } from './enums/word-knowledge-level';

@Component({
    selector: 'sng-word-knowledge-level-selects',
    templateUrl: './word-knowledge-level-selects.component.html',
    styleUrls: ['./word-knowledge-level-selects.component.scss']
})
export class WordKnowledgeLevelSelectsComponent extends ObserverComponent {
    @Input()
    public set level(v: WordKnowledgeLevel) {
        this._level = v;

        this.form.patchValue({ level: v })
    }
    public get level(): WordKnowledgeLevel {
        return this._level;
    }
    private _level: WordKnowledgeLevel;

    @Output() levelChanged = new EventEmitter<WordKnowledgeLevel>();

    form: FormGroup;

    wordKnowledgeLevel = WordKnowledgeLevel;

    constructor(fb: FormBuilder) {
        super();
        this.form = fb.group({
            level: ['', Validators.required]
        });
    }

    onLevelChanged($event: WordKnowledgeLevel): void {
        this.levelChanged.emit($event);
    }

    protected initSubscriptions(): void {
        this.form.valueChanges.subscribe(val => {
            this.levelChanged.emit(val.level)
        });
    }
}
