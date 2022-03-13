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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCarouselModule } from 'ng-mat-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SwiperModule } from "swiper/angular";
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { DictionaryPageModule } from './dictionary-page/dictionary-page.module';
import { CardTrainingPageModule } from './card-training-page/card-training-page.module';
import { SearchPageModule } from './search-page/search-page.module';
import { TrainingSelectionPageModule } from './training-selection-page/training-selection-page.module';
import { WordAddingPageModule } from './word-adding-page/word-adding-page.module';

@NgModule({
    declarations: [
        AppComponent,
        PageFooterComponent,
    ],
    imports: [
        DictionaryPageModule,
        CardTrainingPageModule,
        SearchPageModule,
        TrainingSelectionPageModule,
        WordAddingPageModule,
        //
        NgxsModule.forRoot(),
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
