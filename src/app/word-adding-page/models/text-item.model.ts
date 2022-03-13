export class TextItem {
    wordId: string;
    content: string;
    isPunctuation: boolean;
    isInDictionary: boolean;

    constructor(init?: Partial<TextItem>) {
        Object.assign(this, init);
    }
}
