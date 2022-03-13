export class Song {
    id: string;
    artist: string;
    songName: string;
    videoUrl: string;
    wordCount: number;
    uniqueWordCount: number;

    constructor(init?: Partial<Song>) {
        Object.assign(this, init);
    }
}
