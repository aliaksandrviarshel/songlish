export class SongListItemModel {
    name?: string;
    artist?: string;
    imgUrl?: string;

    constructor(init?: Partial<SongListItemModel>) {
        Object.assign(this, init);
    }
}