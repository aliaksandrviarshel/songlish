export class GetWords {
    static readonly type = '[Words] Get words';

    constructor() { }
}

export class GetWordDetails {
    static readonly type = '[Words] Get word details';

    constructor(public id: string) { }
}
