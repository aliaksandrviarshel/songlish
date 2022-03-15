import { WordKnowledgeLevel } from "../enums/word-knowledge-level";

export class WordCardModel {
    foreign: string;
    translates: string[];
    knowledgeLevel: WordKnowledgeLevel;

    constructor(init?: Partial<WordCardModel>) {
        Object.assign(this, init);
    }
}
