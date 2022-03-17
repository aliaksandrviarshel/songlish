import { SongLineItemModel } from "./song-line-item.model";

export class SongLineModel {
    items: SongLineItemModel[];

    constructor(init?: Partial<SongLineModel>) {
        Object.assign(this, init);
    }
}
