import { Component, Input, OnInit } from '@angular/core';
import { WordKnowledgeLevel } from '../enums/word-knowledge-level.enum';

@Component({
    selector: 'sng-word-knowledge-level',
    templateUrl: './word-knowledge-level.component.html',
    styleUrls: ['./word-knowledge-level.component.scss']
})
export class WordKnowledgeLevelComponent implements OnInit {
    @Input() level: WordKnowledgeLevel;

    wordKnowledgeLevel = WordKnowledgeLevel;

    constructor() { }

    ngOnInit(): void {
    }

}
