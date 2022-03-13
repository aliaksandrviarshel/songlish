import { FlexLayoutModule } from '@angular/flex-layout';

import { PageFooterComponent } from './page-footer/page-footer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchFieldComponent } from './search-page/search-field/search-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WordAddingPageComponent } from './word-adding-page/word-adding-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardTrainingPageComponent } from './card-training-page/card-training-page.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { WordAddingState } from './word-adding-page/state/word-adding.state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SongState } from './search-page/state/song.state';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SwiperModule } from "swiper/angular";
import { CardsSwiperComponent } from './card-training-page/cards-swiper/cards-swiper.component';
import { CardTrainingState } from './card-training-page/state/card-training.state';
import { HighlightPipe } from './+core/pipes/highlight.pipe';
import { SongLinesSwiperComponent } from './card-training-page/song-lines-swiper/song-lines-swiper.component';
import { TrainingSelectionPageComponent } from './training-selection-page/training-selection-page.component';
import { TrainingModeTileComponent } from './training-selection-page/training-mode-tile/training-mode-tile.component';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { DictionaryPageModule } from './dictionary-page/dictionary-page.module';
import { WordKnowledgeLevelSelectsComponent } from './card-training-page/word-knowledge-level-selects/word-knowledge-level-selects.component';

@NgModule({
    declarations: [
        AppComponent,
        PageFooterComponent,
        SearchPageComponent,
        SearchFieldComponent,
        WordAddingPageComponent,
        CardTrainingPageComponent,
        HighlightPipe,
        CardsSwiperComponent,
        SongLinesSwiperComponent,
        TrainingSelectionPageComponent,
        TrainingModeTileComponent,
        WordKnowledgeLevelSelectsComponent,
    ],
    imports: [
        DictionaryPageModule,
        //
        NgxsModule.forRoot([WordAddingState, SongState, CardTrainingState], { developmentMode: !environment.production }),
        NgxsRouterPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        MatCarouselModule.forRoot(),
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
        SwiperModule,
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatAutocompleteModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
