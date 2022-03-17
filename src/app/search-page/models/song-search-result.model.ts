export class SongSearchResultModel {
    id: string;
    artist: string;
    name: string;

    constructor(init?: Partial<SongSearchResultModel>) {
        Object.assign(this, init);
    }
}