export class WordInfoModel {
    translates: string[];

    constructor(init?: Partial<WordInfoModel>) {
        Object.assign(this, init);
    }
}