export class SongLinesModel {
    songName: string;
    performer: string;
    lines: string[];

    constructor(init?: Partial<SongLinesModel>) {
        Object.assign(this, init);
    }
}
