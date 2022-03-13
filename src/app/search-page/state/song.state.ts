import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';
import { SongListItemModel } from '../models/song-list-item.model';
import { SongApiService } from '../services/song-api.service';
import { GetPopularSongs } from './song.actions';

export class SongStateModel {
    public popularSongs: SongListItemModel[];
}

const defaults = {
    popularSongs: []
};

@State<SongStateModel>({
    name: 'song',
    defaults
})
@Injectable()
export class SongState {
    constructor(private songApiService: SongApiService) { }

    @Selector()
    static popularSongs(state: SongStateModel): SongListItemModel[] {
        return state.popularSongs;
    }

    @Action(GetPopularSongs)
    onGetPopularSongs({ patchState }: StateContext<SongStateModel>) {
        return this.songApiService.getPopular().pipe(
            tap(items => {
                patchState({
                    popularSongs: items
                });
            })
        );
    }
}
