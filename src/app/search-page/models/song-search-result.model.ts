export class SongSearchResult {
    id: string;
    content: string;

    constructor(init?: Partial<SongSearchResult>) {
        Object.assign(this, init);
    }
}