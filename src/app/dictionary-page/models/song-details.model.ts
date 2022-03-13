import { WordMinModel } from "../songs-table/song-expanded-tile/models/word-min.model";

export class SongDetailsModel {
    id: string;
    learnedWords: WordMinModel[]
    unlearnedWords: WordMinModel[]

    constructor(init?: Partial<SongDetailsModel>) {
        Object.assign(this, init);
    }
}
