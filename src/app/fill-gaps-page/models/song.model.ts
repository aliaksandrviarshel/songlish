import { SongLineModel } from "./song-line.model";
import { WordMinModel } from "./word-min.model";

export class SongModel {
    performer: string;
    name: string;
    lines: SongLineModel[];
    words: WordMinModel[];

    constructor(init?: Partial<SongModel>) {
        Object.assign(this, init);
    }
}
