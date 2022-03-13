import { WordInfoModel } from "./word-info.model";

export class WordToAddModel {
    id: string;
    foreign: string;
    translates: string[];

    // extention
    isLoading = false;

    constructor(init?: Partial<WordInfoModel>) {
        Object.assign(this, init);
    }
}