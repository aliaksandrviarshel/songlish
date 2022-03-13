export class SongListItemModel {
    id: string;
    fullName: string;
    name: string;
    artist: string;
    wordsCount: number;
    unlearnedWordsCount: number;

    constructor(init?: Partial<SongListItemModel>) {
        Object.assign(this, init);
    }
}