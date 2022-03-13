import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongLinesSwiperComponent } from './song-lines-swiper/song-lines-swiper.component';
import { WordKnowledgeLevelSelectsComponent } from './word-knowledge-level-selects/word-knowledge-level-selects.component';
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
import { CardTrainingPageComponent } from './card-training-page.component';
import { CardsSwiperComponent } from './cards-swiper/cards-swiper.component';
import { NgxsModule } from '@ngxs/store';
import { CardTrainingState } from './state/card-training.state';
import { PipesModule } from '../+shared/pipes/pipes.module';

@NgModule({
    declarations: [
        CardTrainingPageComponent,
        CardsSwiperComponent,
        SongLinesSwiperComponent,
        WordKnowledgeLevelSelectsComponent,
    ],
    imports: [
        PipesModule,
        //
        NgxsModule.forFeature([CardTrainingState]),
        CommonModule,
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
    ]
})
export class CardTrainingPageModule { }
