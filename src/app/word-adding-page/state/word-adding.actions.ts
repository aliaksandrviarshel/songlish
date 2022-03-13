import { TextItem } from "../models/text-item.model";

export class GetSong {
    static readonly type = '[WordAdding] Get song';

    constructor(public songId: string) { }
}

export class GetDistinctWords {
    static readonly type = '[WordAdding] Get distinct words';

    constructor(public songId: string) { }
}

export class GetLines {
    static readonly type = '[WordAdding] Get lines';

    constructor(public songId: string) { }
}

export class AddWord {
    static readonly type = '[WordAdding] Add word';

    constructor(public wordId: string, public foreign: string) { }
}

export class RemoveWord {
    static readonly type = '[WordAdding] Remove word';

    // TODO: uncomment when wordId become not hardcoded data
    // constructor(public wordId: string) { }
    constructor(public foreign: string) { }
}

export class RemoveTranslate {
    static readonly type = '[WordAdding] Remove translate';

    // TODO: uncomment when wordId become not hardcoded data
    // constructor(public wordId: string) { }
    constructor(public foreign: string, public translate: string) { }
}

export class AddTranslate {
    static readonly type = '[WordAdding] Add translate';

    // TODO: uncomment when wordId become not hardcoded data
    // constructor(public wordId: string) { }
    constructor(public foreign: string, public translate: string) { }
}
