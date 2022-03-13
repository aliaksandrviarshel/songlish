import { Component, ElementRef, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { WordListItemModel } from './models/word-list-item.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { WordsState } from './words-state/words.state';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GetWords } from './words-state/words.actions';
import { SongsState } from './songs-state/songs.state';
import { SongListItemModel } from './models/song-list-item.model';

@Component({
    selector: 'sng-dictionary-page',
    templateUrl: './dictionary-page.component.html',
    styleUrls: ['./dictionary-page.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed, void', style({ height: '0px' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])]
})
export class DictionaryPageComponent {
    @Select(WordsState.items) words$: Observable<WordListItemModel[]>;

    @Select(SongsState.items) songs$: Observable<SongListItemModel[]>;

    @ViewChild('searchInput') searchInput: ElementRef;

    filterValue$ = new Subject<string>();

    constructor(private store: Store) { }

    applyFilter(event: any): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.filterValue$.next(filterValue.trim().toLowerCase());
    }

    // private wordsAreEmpty = true;
    onTabChange($event: MatTabChangeEvent): void {
        switch ($event.index) {
            case 0:
                // text is getting by default
                break;
            case 1:
                // if (this.wordsAreEmpty) {
                //     this.store.dispatch(new GetWords());
                //     this.wordsAreEmpty = false;
                // }
                break;
            default:
                break;
        }

        this.searchInput.nativeElement.value = '';
    }

    // words: WordListItemModel[];

    // protected initSubscriptions(): void {
    //     this.words$.subscribe(items => {
    //         this.words = items;
    //     })
    // }

    // @Select(WordsState.items) words$: Observable<WordListItemModel[]>;

    // columns: string[] = ['foreign', 'knowledgeLevel', 'level'];
    // dataSource: MatTableDataSource<WordListItemModel>;
    // words: WordListItemModel[];

    // sortedWords: WordListItemModel[];

    // @ViewChild(MatSort) sort: MatSort;

    // override ngOnInit(): void {
    //     super.ngOnInit();

    //     this.dataSource = new MatTableDataSource(this.words);
    // }

    // ngAfterViewInit() {
    //     this.dataSource.sort = this.sort;
    // }

    // applyFilter(event: any): void {
    //     const filterValue = (event.target as HTMLInputElement).value;
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    // }

    // sortData(sort: Sort) {

    //     const data = this.words.slice();
    //     if (!sort.active || sort.direction === '') {
    //         this.sortedWords = data;
    //         return;
    //     }

    //     this.sortedWords = data.sort((a, b) => {
    //         const isAsc = sort.direction === 'asc';
    //         switch (sort.active) {
    //             case this.columns[0]:
    //                 return this.compare(a.foreign, b.foreign, isAsc);
    //             case this.columns[1]:
    //                 return this.compare(a.knowledgeLevel, b.knowledgeLevel, isAsc);
    //             case this.columns[2]:
    //                 return this.compare(a.level, b.level, isAsc);
    //             default:
    //                 return 0;
    //         }
    //     });
    // }

    // private compare(a: number | string, b: number | string, isAsc: boolean): number {
    //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    // }

    // protected initSubscriptions(): void {
    //     this.words$.subscribe(items => {
    //         this.words = items;
    //     })
    // }
}
