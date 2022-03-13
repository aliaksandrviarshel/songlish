import { SongLinesModel } from "./song-lines.model";
import { WordCardModel } from "./word-card.model";

export class CardDataModel {
    card: WordCardModel;
    songLinesModels: SongLinesModel[];

    constructor(init?: Partial<CardDataModel>) {
        Object.assign(this, init);
    }
}
