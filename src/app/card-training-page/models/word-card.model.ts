import { WordKnowledgeLevel } from "../enums/word-knowledge-level";

export class WordCardModel {
    foreign: string;
    translate: string;
    knowledgeLevel: WordKnowledgeLevel;

    constructor(init?: Partial<WordCardModel>) {
        Object.assign(this, init);
    }
}
