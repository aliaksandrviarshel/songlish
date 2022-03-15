import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordCardModel } from '../models/word-card.model';

@Component({
    selector: 'sng-answer-field',
    templateUrl: './answer-field.component.html',
    styleUrls: ['./answer-field.component.scss']
})
export class AnswerFieldComponent implements OnInit, AfterViewChecked {
    @Input() words: WordCardModel[];

    @Output() indexChanged = new EventEmitter<number>();

    @ViewChild('input') input: ElementRef;

    control = new FormControl();

    currentIndex = 0;

    constructor() { }

    ngOnInit(): void {

    }

    ngAfterViewChecked(): void {
        // TODO: error appears in console but all works fine
        this.input.nativeElement.focus();
    }

    onInput($event: string): void {
        if (this.words[this.currentIndex].translates.includes($event)) {
            this.indexChanged.emit(++this.currentIndex);
            this.input.nativeElement.value = '';
        }
    }
}
