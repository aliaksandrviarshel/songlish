import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, removeItem } from '@ngxs/store/operators';
import { tap } from 'rxjs';
import { SongDetailsModel } from '../models/song-details.model';
import { SongListItemModel } from '../models/song-list-item.model';
import { SongsApiService } from '../services/songs-api.service';
import { DeleteSong, GetSongDetails, GetSongs } from './songs.actions';

export class SongsStateModel {
    public items: SongListItemModel[];
    public details: SongDetailsModel;
}

const defaults = {
    items: [],
    details: null
};

@State<SongsStateModel>({
    name: 'songs',
    defaults
})
@Injectable()
export class SongsState {
    constructor(private songsApiService: SongsApiService) { }

    @Selector()
    static items(state: SongsStateModel): SongListItemModel[] {
        return state.items;
    }

    @Selector()
    static details(state: SongsStateModel): SongDetailsModel {
        return state.details;
    }

    @Action(GetSongs)
    onGetSongs({ patchState }: StateContext<SongsStateModel>) {
        return this.songsApiService.getAll().pipe(
            tap(items => {
                patchState({ items: items });
            })
        );
    }

    @Action(DeleteSong)
    onDeleteSong({ setState }: StateContext<SongsStateModel>, { id }: DeleteSong) {
        return this.songsApiService.delete(id).pipe(
            tap(() => {
                setState(
                    patch({
                        items: removeItem<SongListItemModel>(x => x.id === id)
                    })
                )
            })
        );
    }

    @Action(GetSongDetails)
    onGetSongDetails({ patchState }: StateContext<SongsStateModel>, { id }: GetSongDetails) {
        return this.songsApiService.getDetails(id).pipe(
            tap(item => {
                patchState({
                    details: item
                })
            })
        );
    }
}
