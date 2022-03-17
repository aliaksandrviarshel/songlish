export class SongLineItemModel {
    wordId?: string;
    content: string;
    // isGap?= false;
    // isLastInLine?= false;

    constructor(init?: Partial<SongLineItemModel>) {
        Object.assign(this, init);
    }
}
