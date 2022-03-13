import { TextItem } from "./text-item.model";

export class TextLine {
    items?: TextItem[];

    constructor(init?: Partial<TextLine>) {
        Object.assign(this, init);
    }
}