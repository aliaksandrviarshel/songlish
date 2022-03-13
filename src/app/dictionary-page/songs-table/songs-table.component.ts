import { Component, Input } from '@angular/core';
import { SongListItemModel } from '../models/song-list-item.model';
import { Select, Store } from '@ngxs/store';
import { DeleteSong, GetSongDetails } from '../songs-state/songs.actions';
import { Observable } from 'rxjs';
import { SongDetailsModel } from '../models/song-details.model';
import { SongsState } from '../songs-state/songs.state';
import { UpdateSongModel } from './models/update-song.model';

@Component({
    selector: 'sng-songs-table',
    templateUrl: './songs-table.component.html',
    styleUrls: ['./songs-table.component.scss'],
})
export class SongsTableComponent {
    @Select(SongsState.details) details$: Observable<SongDetailsModel>;

    @Input()
    public items: SongListItemModel[];

    @Input()
    public filterValue: string;

    constructor(private store: Store) { }

    columns: string[] = ['fullName'];

    onDelete(id: string): void {
        this.store.dispatch(new DeleteSong(id));
    }

    onGetDetails(id: string): void {
        this.store.dispatch(new GetSongDetails(id));
    }

    onCancel(): void {
        alert('not implemented')
    }

    onSave($event: UpdateSongModel): void {
        alert($event.learnedWordIds)
    }
}
