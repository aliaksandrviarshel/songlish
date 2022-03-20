import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SongListItemModel } from './models/song-list-item.model';
import { SongState } from './state/song.state';

@Component({
    selector: 'sng-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
    @Select(SongState.popularSongs) popularSongs$: Observable<SongListItemModel[]>;

    constructor(private router: Router) { }

    ngOnInit(): void { }

    onProcessSearchRequest($event: string) {
        this.router.navigate(['word-adding', $event]);
    }
}
