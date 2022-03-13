import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Observable, map, debounceTime, distinctUntilChanged, mergeMap, tap, of } from 'rxjs';
import { SongApiService } from '../services/song-api.service';

@Component({
    selector: 'sng-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
    @Output() submit = new EventEmitter<string>();

    @ViewChild('auto') autocomplete: MatAutocomplete;

    myControl = new FormControl();

    filteredOptions$?: Observable<string[]>;

    toHighlight: string = '';

    constructor(private songApiService: SongApiService) { }

    ngOnInit() {
        this.filteredOptions$ = this.myControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(x => {
                this.toHighlight = x;
            }),
            mergeMap(x => {
                if (!x) {
                    return of([]);
                }

                return this.songApiService.search(x);
            }),
            map(value => {
                return value.map(x => x.content);
            })
        );
    }

    onOptionActivated($event: MatAutocompleteActivatedEvent): void {
        this.myControl.setValue($event.option?.value, { emitEvent: false });
    }

    onSubmit(songName: string): void {
        this.submit.emit(songName);
    }
}
