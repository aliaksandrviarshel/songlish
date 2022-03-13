import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryPageComponent } from './dictionary-page.component';
import { SongsTableComponent } from './songs-table/songs-table.component';
import { TableBaseComponent } from './table-base/table-base.component';
import { SongExpandedTileComponent } from './songs-table/song-expanded-tile/song-expanded-tile.component';
import { SongListTileComponent } from './songs-table/song-list-tile/song-list-tile.component';
import { WordKnowledgeLevelComponent } from './word-knowledge-level/word-knowledge-level.component';
import { WordExpandedTileComponent } from './words-table/word-expanded-tile/word-expanded-tile.component';
import { WordListTileComponent } from './words-table/word-list-tile/word-list-tile.component';
import { WordsTableComponent } from './words-table/words-table.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from '../app-routing.module';
import { ConfirmMenuComponent } from './confirm-menu/confirm-menu.component';
import { WordLevelPipe } from './pipes/word-level.pipe';
import { NgxsModule } from '@ngxs/store';
import { SongsState } from './songs-state/songs.state';
import { WordsState } from './words-state/words.state';

// TODO: fix problem with mat menu at dictionary page
@NgModule({
    providers: [
    ],
    declarations: [
        DictionaryPageComponent,
        SongsTableComponent,
        TableBaseComponent,
        SongExpandedTileComponent,
        SongListTileComponent,
        WordKnowledgeLevelComponent,
        WordsTableComponent,
        WordExpandedTileComponent,
        WordListTileComponent,
        ConfirmMenuComponent,
        WordLevelPipe,
    ],
    imports: [
        NgxsModule.forFeature([WordsState, SongsState]),
        MatMenuModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule,
        ClipboardModule,
        MatTooltipModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatSelectModule,
        ScrollingModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        IvyCarouselModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatChipsModule,
        MatTableModule,
        MatSortModule,
        DragDropModule,
        MatMenuModule,
    ],
    exports: [
    ]
})
export class DictionaryPageModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DictionaryPageComponent } from './dictionary-page.component';
// import { SongsTableComponent } from './songs-table/songs-table.component';
// import { TableBaseComponent } from './table-base/table-base.component';
// import { SongExpandedTileComponent } from './songs-table/song-expanded-tile/song-expanded-tile.component';
// import { SongListTileComponent } from './songs-table/song-list-tile/song-list-tile.component';
// import { WordKnowledgeLevelComponent } from './word-knowledge-level/word-knowledge-level.component';
// import { WordExpandedTileComponent } from './words-table/word-expanded-tile/word-expanded-tile.component';
// import { WordListTileComponent } from './words-table/word-list-tile/word-list-tile.component';
// import { WordsTableComponent } from './words-table/words-table.component';
// import { ClipboardModule } from '@angular/cdk/clipboard';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatRippleModule } from '@angular/material/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
// import { SwiperModule } from 'swiper/angular';
// import { AppRoutingModule } from '../app-routing.module';

// @NgModule({
//     declarations: [
//         DictionaryPageComponent,
//         SongsTableComponent,
//         TableBaseComponent,
//         SongExpandedTileComponent,
//         SongListTileComponent,
//         WordKnowledgeLevelComponent,
//         WordsTableComponent,
//         WordExpandedTileComponent,
//         WordListTileComponent,
//     ],
//     imports: [
//         CommonModule,

//         FormsModule,
//         BrowserModule,
//         CommonModule,
//         AppRoutingModule,
//         BrowserAnimationsModule,
//         FlexLayoutModule,
//         ClipboardModule,
//         ScrollingModule,
//         ReactiveFormsModule,
//         IvyCarouselModule,
//         DragDropModule,
//         SwiperModule,
//         //
//         MatToolbarModule,
//         MatSidenavModule,
//         MatListModule,
//         MatIconModule,
//         MatButtonModule,
//         MatCardModule,
//         MatTooltipModule,
//         MatDialogModule,
//         MatButtonToggleModule,
//         MatSelectModule,
//         MatAutocompleteModule,
//         MatInputModule,
//         MatFormFieldModule,
//         MatExpansionModule,
//         MatRippleModule,
//         MatMenuModule,
//         MatProgressSpinnerModule,
//         MatTabsModule,
//         MatChipsModule,
//         MatTableModule,
//         MatSortModule,
//         MatIconModule,
//         MatButtonModule,
//         MatToolbarModule
//     ]
// })
// export class DictionaryPageModule { }
