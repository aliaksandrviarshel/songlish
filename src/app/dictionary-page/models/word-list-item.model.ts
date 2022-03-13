import { WordKnowledgeLevel } from "../enums/word-knowledge-level.enum";
import { WordLevel } from "../enums/word-level.enum";

export class WordListItemModel {
    id: string;
    foreign: string;
    knowledgeLevel: WordKnowledgeLevel;
    level: WordLevel;

    constructor(init?: Partial<WordListItemModel>) {
        Object.assign(this, init);
    }
}