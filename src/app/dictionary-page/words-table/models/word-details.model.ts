export class WordDetailsModel {
    id: string;
    translates: string[];

    constructor(init?: Partial<WordDetailsModel>) {
        Object.assign(this, init);
    }
}
