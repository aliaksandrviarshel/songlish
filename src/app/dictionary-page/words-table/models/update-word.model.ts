export class UpdateWordModel {
    id: string;
    translates: string[];

    constructor(init?: Partial<UpdateWordModel>) {
        Object.assign(this, init);
    }
}
