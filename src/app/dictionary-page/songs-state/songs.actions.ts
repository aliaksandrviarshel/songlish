export class GetSongs {
    static readonly type = '[Songs] Get songs';

    constructor() { }
}

export class DeleteSong {
    static readonly type = '[Songs] Delete song';

    constructor(public id: string) { }
}

export class GetSongDetails {
    static readonly type = '[Songs] Get song details';

    constructor(public id: string) { }
}
