export class UpdateSongModel {
    id: string;
    unlearnedWordIds: string[];
    learnedWordIds: string[];

    constructor(init?: UpdateSongModel) {
        Object.assign(this, init);
    }
}
