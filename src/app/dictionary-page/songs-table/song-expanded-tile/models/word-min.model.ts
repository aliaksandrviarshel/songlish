export class WordMinModel {
    id: string;
    foreign: string;

    constructor(init?: Partial<WordMinModel>) {
        Object.assign(this, init);
    }
}
