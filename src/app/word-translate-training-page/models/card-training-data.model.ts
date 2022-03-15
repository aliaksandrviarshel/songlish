import { CardDataModel } from "./card-data.model";

export class CardTrainingDataModel {
    cardDatas: CardDataModel[];

    constructor(init?: Partial<CardTrainingDataModel>) {
        Object.assign(this, init);
    }
}
